import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 合并 CSS 类名，自动处理 Tailwind CSS 的类名冲突。
 * @param {...ClassValue[]} inputs - 要合并的类名列表。
 * @returns {string} 合并后的 CSS 类名字符串。
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * 将时间戳格式化为相对时间字符串（例如，“5小时前”）。
 * @param {number} timestamp - Unix 时间戳（秒）。
 * @returns {string} 格式化后的相对时间字符串。
 */
export const formatTimeAgo = (timestamp: number) => {
    const now = Date.now();
    const diffInMs = now - timestamp * 1000; // 转换为毫秒
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
 * 创建一个在指定毫秒数后解析的 Promise，用于延迟执行。
 * @param {number} ms - 延迟的毫秒数。
 * @returns {Promise<void>} 在延迟结束后解析的 Promise。
 */
export function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 将市值数值格式化为易读的字符串（例如，“$3.10T”、“$900.00B”）。
 * @param {number} marketCapUsd - 以美元为单位的市值。
 * @returns {string} 格式化后的市值字符串，如果输入无效则返回 'N/A'。
 */
export function formatMarketCapValue(marketCapUsd: number): string {
    if (!Number.isFinite(marketCapUsd) || marketCapUsd <= 0) return 'N/A';

    if (marketCapUsd >= 1e12) return `$${(marketCapUsd / 1e12).toFixed(2)}T`; // 万亿
    if (marketCapUsd >= 1e9) return `$${(marketCapUsd / 1e9).toFixed(2)}B`; // 十亿
    if (marketCapUsd >= 1e6) return `$${(marketCapUsd / 1e6).toFixed(2)}M`; // 百万
    return `$${marketCapUsd.toFixed(2)}`; // 百万以下
}

/**
 * 获取从今天起过去指定天数的日期范围。
 * @param {number} days - 要回溯的天数。
 * @returns {{to: string, from: string}} 包含开始和结束日期的对象（YYYY-MM-DD格式）。
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
 * 获取今天的日期范围（开始和结束日期都是今天）。
 * @returns {{to: string, from: string}} 包含今天日期的对象（YYYY-MM-DD格式）。
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
 * 根据关注列表中的股票数量计算每个股票应获取的新闻数量。
 * @param {number} symbolsCount - 关注列表中的股票数量。
 * @returns {{itemsPerSymbol: number, targetNewsCount: number}} 包含每个股票的新闻数和目标新闻总数的对象。
 */
export const calculateNewsDistribution = (symbolsCount: number) => {
    let itemsPerSymbol: number;
    let targetNewsCount = 6;

    if (symbolsCount < 3) {
        itemsPerSymbol = 3; // 股票少，每只多看几条新闻
    } else if (symbolsCount === 3) {
        itemsPerSymbol = 2; // 正好3只，每只2条
    } else {
        itemsPerSymbol = 1; // 股票多，每只1条
        targetNewsCount = 6; // 总数不超过6条
    }

    return { itemsPerSymbol, targetNewsCount };
};

/**
 * 验证原始新闻文章对象是否包含所有必需的字段。
 * @param {RawNewsArticle} article - 原始新闻文章对象。
 * @returns {boolean} 如果文章有效则返回 true，否则返回 false。
 */
export const validateArticle = (article: RawNewsArticle) =>
    article.headline && article.summary && article.url && article.datetime;

/**
 * 获取今天的日期字符串（YYYY-MM-DD格式）。
 * @returns {string} 今天的日期字符串。
 */
export const getTodayString = () => new Date().toISOString().split('T')[0];

/**
 * 将原始新闻文章对象格式化为标准化的文章对象。
 * @param {RawNewsArticle} article - 原始新闻文章对象。
 * @param {boolean} isCompanyNews - 是否为公司新闻。
 * @param {string} [symbol] - 如果是公司新闻，则为相关的股票代码。
 * @param {number} [index=0] - 用于生成唯一ID的索引。
 * @returns {object} 格式化后的文章对象。
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
 * 格式化百分比变化值，添加正负号。
 * @param {number | undefined} changePercent - 百分比变化数值。
 * @returns {string} 格式化后的百分比字符串（例如，“+2.50%”）。
 */
export const formatChangePercent = (changePercent?: number) => {
    if (changePercent === undefined || changePercent === null) return '';
    const sign = changePercent > 0 ? '+' : '';
    return `${sign}${changePercent.toFixed(2)}%`;
};

/**
 * 根据百分比变化的符号返回相应的 Tailwind CSS 文本颜色类。
 * @param {number | undefined} changePercent - 百分比变化数值。
 * @returns {string} 文本颜色类名（'text-green-500'、'text-red-500' 或 'text-gray-400'）。
 */
export const getChangeColorClass = (changePercent?: number) => {
    if (!changePercent) return 'text-gray-400';
    return changePercent > 0 ? 'text-green-500' : 'text-red-500';
};

/**
 * 将数值格式化为美元货币字符串。
 * @param {number} price - 价格数值。
 * @returns {string} 格式化后的美元字符串。
 */
export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(price);
};

/**
 * 包含今天格式化日期的常量。
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
 * 根据提醒对象生成描述性文本。
 * @param {Alert} alert - 提醒对象。
 * @returns {string} 描述提醒条件的文本。
 */
export const getAlertText = (alert: Alert) => {
    const condition = alert.alertType === 'upper' ? '>' : '<';
    return `Price ${condition} ${formatPrice(alert.threshold)}`;
};

/**
 * 获取今天格式化的日期字符串。
 * @returns {string} 格式化后的日期字符串。
 */
export const getFormattedTodayDate = () => new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
});
