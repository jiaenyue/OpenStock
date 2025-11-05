'use server';

import { connectToDatabase } from '@/database/mongoose';
import { Watchlist } from '@/database/models/watchlist.model';

/**
 * 根据用户电子邮件获取其关注列表中的所有股票代码。
 *
 * 此函数首先在 "user" 集合中查找具有给定电子邮件的用户，
 * 然后使用用户的 ID 从 "watchlist" 集合中检索所有相关的股票代码。
 *
 * @param {string} email - 要查询的用户的电子邮件地址。
 * @returns {Promise<string[]>} - 一个解析为股票代码字符串数组的 Promise。如果找不到用户或发生错误，则返回一个空数组。
 */
export async function getWatchlistSymbolsByEmail(email: string): Promise<string[]> {
    if (!email) return [];

    try {
        const mongoose = await connectToDatabase();
        const db = mongoose.connection.db;
        if (!db) throw new Error('MongoDB connection not found');

        // Better Auth 将用户存储在 "user" 集合中
        const user = await db.collection('user').findOne<{ _id?: unknown; id?: string; email?: string }>({ email });

        if (!user) return [];

        const userId = (user.id as string) || String(user._id || '');
        if (!userId) return [];

        const items = await Watchlist.find({ userId }, { symbol: 1 }).lean();
        return items.map((i) => String(i.symbol));
    } catch (err) {
        console.error('getWatchlistSymbolsByEmail error:', err);
        return [];
    }
}
