import {Inngest} from "inngest"

/**
 * Inngest 客户端实例。
 *
 * 这个实例被配置为应用程序的 Inngest 客户端，ID 为 "openStock"。
 * 它还配置了 Gemini AI 提供商，使用了环境变量中提供的 API 密钥。
 * 这个客户端用于在整个应用程序中发送和处理 Inngest 事件。
 *
 * @type {Inngest}
 */
export const inngest = new Inngest({
    id: "openStock",
    ai: {gemini: {apiKey: process.env.GEMINI_API_KEY}}
})
