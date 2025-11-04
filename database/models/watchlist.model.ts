import { Schema, model, models, type Document, type Model } from 'mongoose';

/**
 * @file 该文件定义了 Watchlist 集合的 Mongoose Schema 和 Model。
 */

/**
 * 表示关注列表项的文档接口。
 * @interface WatchlistItem
 * @extends {Document}
 */
export interface WatchlistItem extends Document {
    /**
     * 添加此股票的用户的唯一标识符。
     * @type {string}
     */
    userId: string;
    /**
     * 股票的交易代码（例如，“AAPL”）。
     * @type {string}
     */
    symbol: string;
    /**
     * 股票所属公司的名称。
     * @type {string}
     */
    company: string;
    /**
     * 股票被添加到关注列表的日期和时间。
     * @type {Date}
     */
    addedAt: Date;
}

/**
 * WatchlistItem 的 Mongoose Schema。
 *
 * 定义了 MongoDB 中关注列表项的结构、验证和索引。
 *
 * @const WatchlistSchema
 * @type {Schema<WatchlistItem>}
 */
const WatchlistSchema = new Schema<WatchlistItem>(
    {
        userId: { type: String, required: true, index: true },
        symbol: { type: String, required: true, uppercase: true, trim: true },
        company: { type: String, required: true, trim: true },
        addedAt: { type: Date, default: Date.now },
    },
    { timestamps: false }
);

// 为每个用户的股票代码创建唯一索引，防止重复。
WatchlistSchema.index({ userId: 1, symbol: 1 }, { unique: true });

/**
 * WatchlistItem 的 Mongoose Model。
 *
 * 如果模型已存在，则重用它，否则根据 WatchlistSchema 创建一个新模型。
 * 这可以防止在热重载环境中重复编译模型。
 *
 * @const Watchlist
 * @type {Model<WatchlistItem>}
 */
export const Watchlist: Model<WatchlistItem> =
    (models?.Watchlist as Model<WatchlistItem>) || model<WatchlistItem>('Watchlist', WatchlistSchema);
