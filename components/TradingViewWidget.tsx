'use client';

import React, { memo } from 'react';
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import { cn } from '@/lib/utils';

/**
 * TradingViewWidget 组件的属性。
 * @property {string} [title] - 小部件的标题。
 * @property {string} scriptUrl - TradingView 脚本的 URL。
 * @property {Record<string, unknown>} config - 小部件的配置对象。
 * @property {number} [height] - 小部件的高度。
 * @property {string} [className] - 应用于小部件的额外 CSS 类。
 */
interface TradingViewWidgetProps {
    title?: string;
    scriptUrl: string;
    config: Record<string, unknown>;
    height?: number;
    className?: string;
}

/**
 * 渲染一个 TradingView 小部件。
 *
 * @param {TradingViewWidgetProps} props - TradingViewWidget 的属性。
 * @returns {JSX.Element} 一个 TradingView 小部件。
 */
const TradingViewWidget = ({ title, scriptUrl, config, height = 600, className }: TradingViewWidgetProps) => {
    const containerRef = useTradingViewWidget(scriptUrl, config, height);

    return (
        <div className='w-full'>
            {title && <h3 className="font-semibold text-2xl text-gray-100 mb-5">{title}</h3>}
            <div className={cn('tradingview-widget-container', className)} ref={containerRef}>
                <div className="tradingview-widget-container__widget" style={{ height, width: "100%" }} />
            </div>
        </div>
    );
}

export default memo(TradingViewWidget);