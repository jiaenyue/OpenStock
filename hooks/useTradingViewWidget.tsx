'use client';
import { useEffect, useRef } from "react";

/**
 * 一个自定义 React Hook，用于动态加载和渲染 TradingView 小部件。
 *
 * 这个 hook 负责创建一个容器 `div`，并将 TradingView 提供的外部脚本注入其中。
 * 它通过一个 `ref` 返回容器元素，以便可以在组件中渲染。
 * 它还处理组件卸载时的清理工作，以防止内存泄漏。
 *
 * @param {string} scriptUrl - TradingView 小部件脚本的 URL。
 * @param {Record<string, unknown>} config - 包含小部件配置选项的对象。
 * @param {number} [height=600] - 小部件容器的高度（以像素为单位），默认为 600。
 * @returns {React.RefObject<HTMLDivElement>} - 一个指向包含小部件的 `div` 元素的 ref 对象。
 */
const useTradingViewWidget = (scriptUrl: string, config: Record<string, unknown>, height = 600) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        // 防止脚本重复加载
        if (containerRef.current.dataset.loaded) return;
        containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: ${height}px;"></div>`;

        const script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
        script.innerHTML = JSON.stringify(config);

        containerRef.current.appendChild(script);
        containerRef.current.dataset.loaded = 'true';

        // 清理函数：在组件卸载时移除脚本和内容
        return () => {
            if(containerRef.current) {
                containerRef.current.innerHTML = '';
                delete containerRef.current.dataset.loaded;
            }
        }
    }, [scriptUrl, config, height])

    return containerRef;
}
export default useTradingViewWidget;
