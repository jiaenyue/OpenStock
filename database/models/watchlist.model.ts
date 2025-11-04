import { Schema, model, models, type Document, type Model } from 'mongoose';

/**
 * 观察列表项的接口。
 * @property {string} userId - 用户的 ID。
 * @property {string} symbol - 股票代码。
 * @property {string} company - 公司名称。
 * @property {Date} addedAt - 添加日期。
 */
export interface WatchlistItem extends Document {
    userId: string;
    symbol: string;
    company: string;
    addedAt: Date;
}

/**
 * 观察列表项的 Mongoose 模式。
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

// Prevent duplicate symbols per user
WatchlistSchema.index({ userId: 1, symbol: 1 }, { unique: true });

/**
 * 观察列表项的 Mongoose 模型。
 * @type {Model<WatchlistItem>}
 */
export const Watchlist: Model<WatchlistItem> =
    (models?.Watchlist as Model<WatchlistItem>) || model<WatchlistItem>('Watchlist', WatchlistSchema);