import { Inngest } from 'inngest';

/**
 * Inngest 客户端实例。
 * @type {Inngest}
 */
export const inngest = new Inngest({
    id: 'openStock',
    ai: { gemini: { apiKey: process.env.GEMINI_API_KEY } },
});