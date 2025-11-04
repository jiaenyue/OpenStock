'use client';
import { useEffect, useRef } from 'react';

/**
 * 一个 React 钩子，用于将 TradingView 小部件加载到 DOM 中。
 *
 * @param {string} scriptUrl - TradingView 脚本的 URL。
 * @param {Record<string, unknown>} config - 小部件的配置对象。
 * @param {number} [height=600] - 小部件的高度。
 * @returns {React.RefObject<HTMLDivElement>} 一个对小部件容器的引用。
 */
const useTradingViewWidget = (scriptUrl: string, config: Record<string, unknown>, height = 600) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        if (containerRef.current.dataset.loaded) return;
        containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: ${height}px;"></div>`;

        const script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
        script.innerHTML = JSON.stringify(config);

        containerRef.current.appendChild(script);
        containerRef.current.dataset.loaded = 'true';

        return () => {
            if(containerRef.current) {
                containerRef.current.innerHTML = '';
                delete containerRef.current.dataset.loaded;
            }
        }
    }, [scriptUrl, config, height])

    return containerRef;
}
export default useTradingViewWidget