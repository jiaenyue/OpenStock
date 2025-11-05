import { betterAuth } from "better-auth";
import {mongodbAdapter} from "better-auth/adapters/mongodb";
import {connectToDatabase} from "@/database/mongoose";
import {nextCookies} from "better-auth/next-js";


let authInstance: ReturnType<typeof betterAuth> | null = null;

/**
 * 获取并初始化 better-auth 实例。
 *
 * 此函数使用单例模式确保只创建一个 auth 实例。
 * 它会连接到 MongoDB 数据库，并使用 MongoDB 适配器和环境变量中定义的设置来配置 better-auth。
 *
 * @returns {Promise<ReturnType<typeof betterAuth>>} 一个解析为初始化的 better-auth 实例的 Promise。
 * @throws {Error} 如果 MongoDB 连接未找到。
 */
export const getAuth = async () => {
    if(authInstance) {
        return authInstance;
    }

    const mongoose = await connectToDatabase();
    const db = mongoose.connection;

    if (!db) {
        throw new Error("MongoDB connection not found!");
    }

    authInstance = betterAuth({
        database: mongodbAdapter(db as any),
       secret: process.env.BETTER_AUTH_SECRET,
        baseURL: process.env.BETTER_AUTH_URL,
        emailAndPassword: {
            enabled: true,
            disableSignUp: false,
            requireEmailVerification: false,
            minPasswordLength: 8,
            maxPasswordLength: 128,
            autoSignIn: true,
        },
        plugins: [nextCookies()],

    });

    return authInstance;
}

/**
 * 导出的已初始化的 better-auth 实例。
 *
 * 这个实例可以在整个应用程序中用于处理身份验证相关的所有操作，
 * 例如登录、注册和会话管理。
 */
export const auth = await getAuth();
