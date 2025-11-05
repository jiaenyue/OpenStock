import {inngest} from "@/lib/inngest/client";
import {NEWS_SUMMARY_EMAIL_PROMPT, PERSONALIZED_WELCOME_EMAIL_PROMPT} from "@/lib/inngest/prompts";
import {sendNewsSummaryEmail, sendWelcomeEmail} from "@/lib/nodemailer";
import {getAllUsersForNewsEmail} from "@/lib/actions/user.actions";
import { getWatchlistSymbolsByEmail } from "@/lib/actions/watchlist.actions";
import { getNews } from "@/lib/actions/finnhub.actions";
import { getFormattedTodayDate } from "@/lib/utils";

/**
 * Inngest 函数：在用户创建时发送个性化欢迎邮件。
 *
 * 此函数由 'app/user.created' 事件触发。它会：
 * 1. 根据用户的个人资料（国家、投资目标等）构建一个提示。
 * 2. 使用 AI（Gemini）生成一段个性化的欢迎介绍文本。
 * 3. 使用生成的介绍文本向新用户发送一封欢迎邮件。
 *
 * @param {object} context - Inngest 函数上下文。
 * @param {object} context.event - 触发函数的事件对象。
 * @param {object} context.step - 用于执行函数步骤的工具对象。
 * @returns {Promise<{success: boolean, message: string}>} 一个表示操作结果的对象。
 */
export const sendSignUpEmail = inngest.createFunction(
    { id: 'sign-up-email' },
    { event: 'app/user.created'},
    async ({ event, step }) => {
        const userProfile = `
            - Country: ${event.data.country}
            - Investment goals: ${event.data.investmentGoals}
            - Risk tolerance: ${event.data.riskTolerance}
            - Preferred industry: ${event.data.preferredIndustry}
        `

        const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace('{{userProfile}}', userProfile)

        const response = await step.ai.infer('generate-welcome-intro', {
            model: step.ai.models.gemini({ model: 'gemini-2.5-flash-lite' }),
            body: {
                contents: [
                    {
                        role: 'user',
                        parts: [
                            { text: prompt }
                        ]
                    }]
            }
        })

        await step.run('send-welcome-email', async () => {
            const part = response.candidates?.[0]?.content?.parts?.[0];
            const introText = (part && 'text' in part ? part.text : null) ||'Thanks for joining Openstock. You now have the tools to track markets and make smarter moves.'

            const { data: { email, name } } = event;

            return await sendWelcomeEmail({ email, name, intro: introText });
        })

        return {
            success: true,
            message: 'Welcome email sent successfully'
        }
    }
)

/**
 * Inngest 函数：发送每日新闻摘要邮件。
 *
 * 此函数由 'app/send.daily.news' 事件触发，或按 CRON 计划 '0 12 * * *'（每天中午12点）运行。
 * 它会：
 * 1. 获取所有需要接收新闻邮件的用户。
 * 2. 对每个用户，获取其关注列表的股票代码，并获取相关的新闻（如果无特定新闻则回退到一般新闻）。
 * 3. 使用 AI（Gemini）为每个用户的新闻文章生成摘要。
 * 4. 向每个用户发送包含个性化新闻摘要的电子邮件。
 *
 * @param {object} context - Inngest 函数上下文。
 * @param {object} context.step - 用于执行函数步骤的工具对象。
 * @returns {Promise<{success: boolean, message: string}>} 一个表示操作结果的对象。
 */
export const sendDailyNewsSummary = inngest.createFunction(
    { id: 'daily-news-summary' },
    [ { event: 'app/send.daily.news' }, { cron: '0 12 * * *' } ],
    async ({ step }) => {
        // 步骤 #1: 获取所有用于新闻投递的用户
        const users = await step.run('get-all-users', getAllUsersForNewsEmail)

        if(!users || users.length === 0) return { success: false, message: 'No users found for news email' };

        // 步骤 #2: 为每个用户获取关注列表代码 -> 获取新闻 (回退到通用新闻)
        const results = await step.run('fetch-user-news', async () => {
            const perUser: Array<{ user: User; articles: MarketNewsArticle[] }> = [];
            for (const user of users as User[]) {
                try {
                    const symbols = await getWatchlistSymbolsByEmail(user.email);
                    let articles = await getNews(symbols);
                    // 每个用户最多6篇文章
                    articles = (articles || []).slice(0, 6);
                    // 如果仍然为空，则回退到通用新闻
                    if (!articles || articles.length === 0) {
                        articles = await getNews();
                        articles = (articles || []).slice(0, 6);
                    }
                    perUser.push({ user, articles });
                } catch (e) {
                    console.error('daily-news: error preparing user news', user.email, e);
                    perUser.push({ user, articles: [] });
                }
            }
            return perUser;
        });

        // 步骤 #3: 通过 AI 总结新闻
        const userNewsSummaries: { user: User; newsContent: string | null }[] = [];

        for (const { user, articles } of results) {
            try {
                const prompt = NEWS_SUMMARY_EMAIL_PROMPT.replace('{{newsData}}', JSON.stringify(articles, null, 2));

                const response = await step.ai.infer(`summarize-news-${user.email}`, {
                    model: step.ai.models.gemini({ model: 'gemini-2.5-flash-lite' }),
                    body: {
                        contents: [{ role: 'user', parts: [{ text:prompt }]}]
                    }
                });

                const part = response.candidates?.[0]?.content?.parts?.[0];
                const newsContent = (part && 'text' in part ? part.text : null) || 'No market news.'

                userNewsSummaries.push({ user, newsContent });
            } catch (e) {
                console.error('Failed to summarize news for : ', user.email);
                userNewsSummaries.push({ user, newsContent: null });
            }
        }

        // 步骤 #4: 发送邮件
        await step.run('send-news-emails', async () => {
            await Promise.all(
                userNewsSummaries.map(async ({ user, newsContent}) => {
                    if(!newsContent) return false;

                    return await sendNewsSummaryEmail({ email: user.email, date: getFormattedTodayDate(), newsContent })
                })
            )
        })

        return { success: true, message: 'Daily news summary emails sent successfully' }
    }
)
