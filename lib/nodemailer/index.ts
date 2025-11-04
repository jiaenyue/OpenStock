import nodemailer from 'nodemailer';
import { WELCOME_EMAIL_TEMPLATE, NEWS_SUMMARY_EMAIL_TEMPLATE } from '@/lib/nodemailer/templates';

/**
 * Nodemailer 邮件传输器。
 * @type {import('nodemailer').Transporter}
 */
export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL!,
        pass: process.env.NODEMAILER_PASSWORD!,
    },
});

/**
 * 欢迎邮件的数据类型。
 * @property {string} email - 收件人的电子邮件。
 * @property {string} name - 收件人的姓名。
 * @property {string} intro - 邮件的介绍内容。
 */
type WelcomeEmailData = {
    email: string;
    name: string;
    intro: string;
};

/**
 * 发送欢迎邮件。
 *
 * @param {WelcomeEmailData} data - 欢迎邮件的数据。
 * @returns {Promise<void>}
 */
export const sendWelcomeEmail = async ({ email, name, intro }: WelcomeEmailData) => {
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE.replace('{{name}}', name).replace('{{intro}}', intro);

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
 * 发送新闻摘要电子邮件。
 *
 * @param {object} data - 新闻摘要电子邮件的数据。
 * @param {string} data.email - 收件人的电子邮件。
 * @param {string} data.date - 日期。
 * @param {string} data.newsContent - 新闻内容。
 * @returns {Promise<void>}
 */
export const sendNewsSummaryEmail = async ({
                                             email,
                                             date,
                                             newsContent,
                                         }: {
    email: string;
    date: string;
    newsContent: string;
}): Promise<void> => {
    const htmlTemplate = NEWS_SUMMARY_EMAIL_TEMPLATE.replace('{{date}}', date).replace('{{newsContent}}', newsContent);

    const mailOptions = {
        from: `"Openstock" <opendevsociety@gmail.com>`,
        to: email,
        subject: `📈 Market News Summary Today - ${date}`,
        text: `Today's market news summary from Openstock`,
        html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);
};