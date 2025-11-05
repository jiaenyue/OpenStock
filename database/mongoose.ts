import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

/**
 * @file 该文件负责管理与 MongoDB 数据库的连接。
 * 它使用了一个全局缓存机制来避免在开发环境中因热重载而创建多个数据库连接。
 */

// 声明一个全局变量来缓存 mongoose 连接实例和 promise。
declare global {
    var mongooseCache: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    }
}

let cached = global.mongooseCache;

if (!cached){
    cached = global.mongooseCache = { conn: null, promise: null };
}

/**
 * 连接到 MongoDB 数据库。
 *
 * 此函数处理与 MongoDB 的连接，并利用缓存来重用现有连接。
 * 如果缓存中已存在连接，则直接返回该连接。
 * 否则，它会使用环境变量中提供的 MONGODB_URI 创建一个新的连接。
 *
 * @returns {Promise<typeof mongoose>} 一个解析为 mongoose 连接实例的 Promise。
 * @throws {Error} 如果 MONGODB_URI 环境变量未设置，或者连接到数据库时发生错误。
 */
export const connectToDatabase = async () => {
    if(!MONGODB_URI){
        throw new Error("MongoDB URI is missing");
    }

    if(cached.conn) return cached.conn;

    if(!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {bufferCommands: false});
    }

    try{
        cached.conn = await cached.promise;
    }
    catch(err){
        cached.promise = null;
        throw err;
    }

    console.log(`MongoDB Connected ${MONGODB_URI} in ${process.env.NODE_ENV}`);
    return cached.conn;
}
