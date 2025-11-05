import { connectToDatabase } from "../database/mongoose";

/**
 * @file 该脚本用于测试与 MongoDB 数据库的连接。
 *
 * 它导入并调用应用程序中定义的 `connectToDatabase` 函数。
 * 如果连接成功，它会向控制台打印成功消息并以状态码 0 退出。
 * 如果连接失败，它会记录错误并以状态码 1 退出。
 * 这个脚本是验证数据库连接配置是否正确的快速方法。
 */

/**
 * 主函数，执行数据库连接测试。
 * @async
 */
async function main() {
    try {
        await connectToDatabase();
        // 如果 connectToDatabase 成功解析且未抛出异常，则连接成功
        console.log("OK: Database connection succeeded");
        process.exit(0);
    } catch (err) {
        console.error("ERROR: Database connection failed");
        console.error(err);
        process.exit(1);
    }
}

main();
