'use client';

import { useCallback, useRef } from 'react';

/**
 * 创建一个去抖动的函数，该函数会延迟调用，直到等待时间过去。
 *
 * @param {() => void} callback - 要去抖动的函数。
 * @param {number} delay - 延迟的毫秒数。
 * @returns {() => void} 一个新的去抖动函数。
 */
export function useDebounce(callback: () => void, delay: number) {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const callbackRef = useRef(callback);

    // Keep callback ref up to date
    callbackRef.current = callback;

    return useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay])
}