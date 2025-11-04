import nodemailer from 'nodemailer';
import {WELCOME_EMAIL_TEMPLATE, NEWS_SUMMARY_EMAIL_TEMPLATE} from "@/lib/nodemailer/templates";

/**
 * Nodemailer transporter.
 *
 * 这个 transporter 使用 Gmail 服务进行配置，并使用环境变量中定义的凭据进行身份验证。
 * 它负责发送应用程序中的所有电子邮件。
 *
 * @type {nodemailer.Transporter}
 */
export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL!,
        pass: process.env.NODEMAILER_PASSWORD!,
    }
})

/**
 * 发送欢迎电子邮件。
 *
 * 此函数接收用户的电子邮件、姓名和一段个性化的介绍文本，
 * 然后使用 `WELCOME_EMAIL_TEMPLATE` 构建 HTML 内容，并通过 transporter 发送邮件。
 *
 * @param {WelcomeEmailData} data - 包含发送欢迎邮件所需数据的对象。
 * @param {string} data.email - 收件人的电子邮件地址。
 * @param {string} data.name - 收件人的姓名。
 * @param {string} data.intro - 个性化的介绍文本（HTML格式）。
 * @returns {Promise<void>} - 在邮件发送完成后解析的 Promise。
 */
export const sendWelcomeEmail = async ({ email, name, intro }: WelcomeEmailData) => {
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE
        .replace('{{name}}', name)
        .replace('{{intro}}', intro);

    const mailOptions = {
        from: `"Openstock" <opendevsociety@gmail.com>`,
        to: email,
        subject: `Welcome to Openstock - your open-source stock market toolkit!`,
        text: 'Thanks for joining Openstock, an initiative by open dev society',
        html: htmlTemplate,
    }

    await transporter.sendMail(mailOptions);
}

/**
 * 发送每日新闻摘要电子邮件。
 *
 * 此函数接收用户的电子邮件、当前日期和新闻内容的 HTML 字符串，
 * 然后使用 `NEWS_SUMMARY_EMAIL_TEMPLATE` 构建完整的 HTML 邮件，并通过 transporter 发送。
 *
 * @param {object} data - 包含发送新闻摘要邮件所需数据的对象。
 * @param {string} data.email - 收件人的电子邮件地址。
 * @param {string} data.date - 当天的日期字符串。
 * @param {string} data.newsContent - 包含新闻摘要的 HTML 内容。
 * @returns {Promise<void>} - 在邮件发送完成后解析的 Promise。
 */
export const sendNewsSummaryEmail = async (
    { email, date, newsContent }: { email: string; date: string; newsContent: string }
): Promise<void> => {
    const htmlTemplate = NEWS_SUMMARY_EMAIL_TEMPLATE
        .replace('{{date}}', date)
        .replace('{{newsContent}}', newsContent);

    const mailOptions = {
        from: `"Openstock" <opendevsociety@gmail.com>`,
        to: email,
        subject: `📈 Market News Summary Today - ${date}`,
        text: `Today's market news summary from Openstock`,
        html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);
};
