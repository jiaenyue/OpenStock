'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/lib/utils';

/**
 * 一个圆形的用户头像。
 *
 * @param {object} props - 组件属性。
 * @param {string} [props.className] - 应用于组件的额外 CSS 类。
 * @returns {JSX.Element} 渲染后的头像组件。
 */
function Avatar({
                  className,
                  ...props
              }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
    return (
        <AvatarPrimitive.Root
            data-slot='avatar'
            className={cn(
                'relative flex size-8 shrink-0 overflow-hidden rounded-full',
                className
            )}
            {...props}
        />
    );
}

/**
 * 头像的图像部分。当图像加载失败时，将显示回退内容。
 *
 * @param {object} props - 组件属性。
 * @param {string} [props.className] - 应用于组件的额外 CSS 类。
 * @returns {JSX.Element} 渲染后的头像图像组件。
 */
function AvatarImage({
                       className,
                       ...props
                   }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
    return (
        <AvatarPrimitive.Image
            data-slot='avatar-image'
            className={cn('aspect-square size-full', className)}
            {...props}
        />
    );
}

/**
 * 当头像图像加载失败时显示的回退内容。
 *
 * @param {object} props - 组件属性。
 * @param {string} [props.className] - 应用于组件的额外 CSS 类。
 * @returns {JSX.Element} 渲染后的头像回退组件。
 */
function AvatarFallback({
                          className,
                          ...props
                      }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
    return (
        <AvatarPrimitive.Fallback
            data-slot='avatar-fallback'
            className={cn(
                'bg-muted flex size-full items-center justify-center rounded-full',
                className
            )}
            {...props}
        />
    );
}

export { Avatar, AvatarImage, AvatarFallback };
