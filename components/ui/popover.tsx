'use client';

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '@/lib/utils';

/**
 * 根组件，用于包裹整个弹出框。
 *
 * @param {object} props - 组件属性。
 * @returns {JSX.Element} 渲染后的弹出框根组件。
 */
function Popover({
                   ...props
               }: React.ComponentProps<typeof PopoverPrimitive.Root>) {
    return <PopoverPrimitive.Root data-slot='popover' {...props} />;
}

/**
 * 用于打开弹出框的按钮。
 *
 * @param {object} props - 组件属性。
 * @returns {JSX.Element} 渲染后的弹出框触发器组件。
 */
function PopoverTrigger({
                          ...props
                      }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
    return <PopoverPrimitive.Trigger data-slot='popover-trigger' {...props} />;
}

/**
 * 弹出框的主要内容区域。
 *
 * @param {object} props - 组件属性。
 * @param {string} [props.className] - 应用于组件的额外 CSS 类。
 * @param {'center' | 'start' | 'end'} [props.align] - 内容的对齐方式。
 * @param {number} [props.sideOffset] - 内容与触发器之间的偏移量。
 * @returns {JSX.Element} 渲染后的弹出框内容组件。
 */
function PopoverContent({
                          className,
                          align = 'center',
                          sideOffset = 4,
                          ...props
                      }: React.ComponentProps<typeof PopoverPrimitive.Content>) {
    return (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
                data-slot='popover-content'
                align={align}
                sideOffset={sideOffset}
                className={cn(
                    'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
                    className
                )}
                {...props}
            />
        </PopoverPrimitive.Portal>
    );
}

/**
 * 弹出框的锚点。
 *
 * @param {object} props - 组件属性。
 * @returns {JSX.Element} 渲染后的弹出框锚点组件。
 */
function PopoverAnchor({
                         ...props
                     }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
    return <PopoverPrimitive.Anchor data-slot='popover-anchor' {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
