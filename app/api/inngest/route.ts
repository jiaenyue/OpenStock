import {serve} from "inngest/next";
import { inngest } from '@/lib/inngest/client';
import { sendDailyNewsSummary, sendSignUpEmail } from '@/lib/inngest/functions';

/**
 * @handler GET /api/inngest
 * @handler POST /api/inngest
 * @handler PUT /api/inngest
 * @description Inngest a new event
 */
export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [sendSignUpEmail, sendDailyNewsSummary],
});