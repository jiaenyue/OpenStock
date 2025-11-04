'use server';

import {connectToDatabase} from "@/database/mongoose";

/**
 * 从数据库中获取所有用于发送新闻邮件的用户。
 *
 * 此函数连接到数据库，查询 "user" 集合，并返回所有拥有有效 email 和 name 的用户列表。
 * 返回的用户对象只包含 id、email 和 name 字段。
 *
 * @returns {Promise<Array<{id: string, email: string, name: string}>>} - 一个解析为用户对象数组的 Promise。如果发生错误，则返回一个空数组。
 */
export const getAllUsersForNewsEmail = async () => {
    try {
        const mongoose = await connectToDatabase();
        const db = mongoose.connection.db;
        if(!db) throw new Error('Mongoose connection not connected');

        const users = await db.collection('user').find(
            { email: { $exists: true, $ne: null }},
            { projection: { _id: 1, id: 1, email: 1, name: 1, country:1 }}
        ).toArray();

        return users.filter((user) => user.email && user.name).map((user) => ({
            id: user.id || user._id?.toString() || '',
            email: user.email,
            name: user.name
        }))
    } catch (e) {
        console.error('Error fetching users for news email:', e)
        return []
    }
}
