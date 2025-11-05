'use client';

import { useCallback, useRef } from 'react';

/**
 * 创建一个去抖动的函数，该函数会延迟调用提供的回调函数。
 *
 * 此 hook 返回一个函数，该函数在被调用后会等待指定的延迟时间。
 * 如果在该延迟时间内再次调用此函数，则先前的计时器会被清除并重新开始。
 * 只有在延迟结束后，最新的回调函数才会被执行。
 *
 * @param {() => void} callback - 在延迟后要执行的函数。
 * @param {number} delay - 去抖动的延迟时间（以毫秒为单位）。
 * @returns {() => void} - 一个新的去抖动函数，调用它会开始或重置延迟计时器。
 */
export function useDebounce(callback: () => void, delay: number) {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const callbackRef = useRef(callback);

    // 始终保持回调引用为最新，以避免陈旧的闭包问题。
    callbackRef.current = callback;

    return useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay])
}
