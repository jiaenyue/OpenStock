'use server';

import {auth} from "@/lib/better-auth/auth";
import { inngest } from '@/lib/inngest/client';
import { headers } from 'next/headers';

/**
 * 使用电子邮件和密码注册新用户。
 *
 * @param {SignUpFormData} data - 注册表单数据。
 * @returns {Promise<{success: boolean, data?: any, error?: string}>} 一个包含成功状态和数据或错误的对象。
 */
export const signUpWithEmail = async ({
                                        email,
                                        password,
                                        fullName,
                                        country,
                                        investmentGoals,
                                        riskTolerance,
                                        preferredIndustry,
                                    }: SignUpFormData) => {
    try {
        const response = await auth.api.signUpEmail({ body: { email, password, name: fullName } });

        if (response) {
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
 * 使用电子邮件和密码登录用户。
 *
 * @param {SignInFormData} data - 登录表单数据。
 * @returns {Promise<{success: boolean, data?: any, error?: string}>} 一个包含成功状态和数据或错误的对象。
 */
export const signInWithEmail = async ({ email, password }: SignInFormData) => {
    try {
        const response = await auth.api.signInEmail({ body: { email, password } });

        return { success: true, data: response };
    } catch (e) {
        console.log('Sign in failed', e)
        return { success: false, error: 'Sign in failed' }
    }
}

/**
 * 退出当前登录的用户。
 *
 * @returns {Promise<{success: boolean, error?: string}>} 一个包含成功状态或错误的对象。
 */
export const signOut = async () => {
    try {
        await auth.api.signOut({ headers: await headers() });
    } catch (e) {
        console.log('Sign out failed', e)
        return { success: false, error: 'Sign out failed' }
    }
}

