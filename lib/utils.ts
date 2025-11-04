import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 合并 CSS 类名。
 *
 * @param {...ClassValue} inputs - 要合并的 CSS 类名。
 * @returns {string} 合并后的 CSS 类名。
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * 将时间戳格式化为“多久以前”的字符串。
 *
 * @param {number} timestamp - Unix 时间戳。
 * @returns {string} 格式化的时间字符串。
 */
export const formatTimeAgo = (timestamp: number) => {
    const now = Date.now();
    const diffInMs = now - timestamp * 1000; // Convert to milliseconds
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

    if (diffInHours > 24) {
        const days = Math.floor(diffInHours / 24);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (diffInHours >= 1) {
        return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
        return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    }
};

/**
 * 延迟指定毫秒数。
 *
 * @param {number} ms - 延迟的毫秒数。
 * @returns {Promise<void>}
 */
export function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 将市值格式化为字符串。
 *
 * @param {number} marketCapUsd - 市值（美元）。
 * @returns {string} 格式化的市值字符串。
 */
export function formatMarketCapValue(marketCapUsd: number): string {
    if (!Number.isFinite(marketCapUsd) || marketCapUsd <= 0) return 'N/A';

    if (marketCapUsd >= 1e12) return `$${(marketCapUsd / 1e12).toFixed(2)}T`; // Trillions
    if (marketCapUsd >= 1e9) return `$${(marketCapUsd / 1e9).toFixed(2)}B`; // Billions
    if (marketCapUsd >= 1e6) return `$${(marketCapUsd / 1e6).toFixed(2)}M`; // Millions
    return `$${marketCapUsd.toFixed(2)}`; // Below one million, show full USD amount
}

/**
 * 获取日期范围。
 *
 * @param {number} days - 天数。
 * @returns {{to: string, from: string}} 包含开始和结束日期的对象。
 */
export const getDateRange = (days: number) => {
    const toDate = new Date();
    const fromDate = new Date();
    fromDate.setDate(toDate.getDate() - days);
    return {
        to: toDate.toISOString().split('T')[0],
        from: fromDate.toISOString().split('T')[0],
    };
};

/**
 * 获取今天的日期范围。
 *
 * @returns {{to: string, from: string}} 包含今天开始和结束日期的对象。
 */
export const getTodayDateRange = () => {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    return {
        to: todayString,
        from: todayString,
    };
};

/**
 * 根据观察列表大小计算每个股票的新闻数量。
 *
 * @param {number} symbolsCount - 股票数量。
 * @returns {{itemsPerSymbol: number, targetNewsCount: number}} 包含每个股票的新闻数量和目标新闻总数的对象。
 */
export const calculateNewsDistribution = (symbolsCount: number) => {
    let itemsPerSymbol: number;
    let targetNewsCount = 6;

    if (symbolsCount < 3) {
        itemsPerSymbol = 3; // Fewer symbols, more news each
    } else if (symbolsCount === 3) {
        itemsPerSymbol = 2; // Exactly 3 symbols, 2 news each = 6 total
    } else {
        itemsPerSymbol = 1; // Many symbols, 1 news each
        targetNewsCount = 6; // Don't exceed 6 total
    }

    return { itemsPerSymbol, targetNewsCount };
};

/**
 * 验证文章是否包含必填字段。
 *
 * @param {RawNewsArticle} article - 要验证的文章。
 * @returns {boolean} 如果文章有效，则为 true，否则为 false。
 */
export const validateArticle = (article: RawNewsArticle) =>
    article.headline && article.summary && article.url && article.datetime;

/**
 * 获取今天的日期字符串（YYYY-MM-DD）。
 *
 * @returns {string} 今天的日期字符串。
 */
export const getTodayString = () => new Date().toISOString().split('T')[0];

/**
 * 格式化文章对象。
 *
 * @param {RawNewsArticle} article - 原始文章对象。
 * @param {boolean} isCompanyNews - 指示是否为公司新闻。
 * @param {string} [symbol] - 股票代码。
 * @param {number} [index=0] - 索引。
 * @returns {MarketNewsArticle} 格式化的文章对象。
 */
export const formatArticle = (
    article: RawNewsArticle,
    isCompanyNews: boolean,
    symbol?: string,
    index: number = 0
) => ({
    id: isCompanyNews ? Date.now() + Math.random() : article.id + index,
    headline: article.headline!.trim(),
    summary:
        article.summary!.trim().substring(0, isCompanyNews ? 200 : 150) + '...',
    source: article.source || (isCompanyNews ? 'Company News' : 'Market News'),
    url: article.url!,
    datetime: article.datetime!,
    image: article.image || '',
    category: isCompanyNews ? 'company' : article.category || 'general',
    related: isCompanyNews ? symbol! : article.related || '',
});

/**
 * 格式化百分比变化。
 *
 * @param {number} [changePercent] - 百分比变化。
 * @returns {string} 格式化的百分比变化字符串。
 */
export const formatChangePercent = (changePercent?: number) => {
    if (changePercent === undefined || changePercent === null) return '';
    const sign = changePercent > 0 ? '+' : '';
    return `${sign}${changePercent.toFixed(2)}%`;
};

/**
 * 根据百分比变化获取颜色类名。
 *
 * @param {number} [changePercent] - 百分比变化。
 * @returns {string} 颜色类名。
 */
export const getChangeColorClass = (changePercent?: number) => {
    if (!changePercent) return 'text-gray-400';
    return changePercent > 0 ? 'text-green-500' : 'text-red-500';
};

/**
 * 格式化价格。
 *
 * @param {number} price - 价格。
 * @returns {string} 格式化的价格字符串。
 */
export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(price);
};

/**
 * 格式化今天的日期。
 * @type {string}
 */
export const formatDateToday = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
});

/**
 * 获取警报文本。
 *
 * @param {Alert} alert - 警报对象。
 * @returns {string} 警报文本。
 */
export const getAlertText = (alert: Alert) => {
    const condition = alert.alertType === 'upper' ? '>' : '<';
    return `Price ${condition} ${formatPrice(alert.threshold)}`;
};

/**
 * 获取格式化的今天日期。
 *
 * @returns {string} 格式化的今天日期字符串。
 */
export const getFormattedTodayDate = () => new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
});