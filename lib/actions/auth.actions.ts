'use server';

import {auth} from "@/lib/better-auth/auth";
import {inngest} from "@/lib/inngest/client";
import {headers} from "next/headers";

/**
 * 使用电子邮件和密码处理用户注册。
 *
 * 注册成功后，此函数会向 Inngest 发送一个事件来处理后续任务，
 * 例如将用户数据保存到数据库。
 *
 * @param {SignUpFormData} data - 包含用户注册信息的对象。
 * @param {string} data.email - 用户的电子邮件地址。
 * @param {string} data.password - 用户的密码。
 * @param {string} data.fullName - 用户的全名。
 * @param {string} data.country - 用户的国家。
 * @param {string[]} data.investmentGoals - 用户的投资目标。
 * @param {string} data.riskTolerance - 用户的风险承受能力。
 * @param {string} data.preferredIndustry - 用户的首选行业。
 * @returns {Promise<{success: boolean, data?: any, error?: string}>} 一个表示操作成功或失败的对象。
 */
export const signUpWithEmail = async ({ email, password, fullName, country, investmentGoals, riskTolerance, preferredIndustry }: SignUpFormData) => {
    try {
        const response = await auth.api.signUpEmail({ body: { email, password, name: fullName } })

        if(response) {
            await inngest.send({
                name: 'app/user.created',
                data: { email, name: fullName, country, investmentGoals, riskTolerance, preferredIndustry }
            })
        }

        return { success: true, data: response }
    } catch (e) {
        console.log('Sign up failed', e)
        return { success: false, error: 'Sign up failed' }
    }
}

/**
 * 使用电子邮件和密码处理用户登录。
 *
 * @param {SignInFormData} data - 包含用户登录凭据的对象。
 * @param {string} data.email - 用户的电子邮件地址。
 * @param {string} data.password - 用户的密码。
 * @returns {Promise<{success: boolean, data?: any, error?: string}>} 一个表示操作成功或失败的对象。
 */
export const signInWithEmail = async ({ email, password }: SignInFormData) => {
    try {
        const response = await auth.api.signInEmail({ body: { email, password } })

        return { success: true, data: response }
    } catch (e) {
        console.log('Sign in failed', e)
        return { success: false, error: 'Sign in failed' }
    }
}

/**
 * 处理用户登出。
 *
 * @returns {Promise<{success: boolean, error?: string} | undefined>} 如果失败则返回一个对象，否则不返回任何内容。
 */
export const signOut = async () => {
    try {
        await auth.api.signOut({ headers: await headers() });
    } catch (e) {
        console.log('Sign out failed', e)
        return { success: false, error: 'Sign out failed' }
    }
}
