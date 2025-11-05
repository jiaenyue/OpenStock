'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

/**
 * 根组件，用于包裹整个对话框。
 *
 * @param {object} props - 组件属性。
 * @returns {JSX.Element} 渲染后的对话框根组件。
 */
function Dialog({
                  ...props
              }: React.ComponentProps<typeof DialogPrimitive.Root>) {
    return <DialogPrimitive.Root data-slot='dialog' {...props} />;
}

/**
 * 用于打开对话框的按钮。
 *
 * @param {object} props - 组件属性。
 * @returns {JSX.Element} 渲染后的对话框触发器组件。
 */
function DialogTrigger({
                         ...props
                     }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
    return <DialogPrimitive.Trigger data-slot='dialog-trigger' {...props} />;
}

/**
 * 将对话框内容渲染到 DOM 中的不同位置。
 *
 * @param {object} props - 组件属性。
 * @returns {JSX.Element} 渲染后的对话框入口组件。
 */
function DialogPortal({
                        ...props
                    }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
    return <DialogPrimitive.Portal data-slot='dialog-portal' {...props} />;
}

/**
 * 用于关闭对话框的按钮。
 *
 * @param {object} props - 组件属性。
 * @returns {JSX.Element} 渲染后的对话框关闭组件。
 */
function DialogClose({
                       ...props
                   }: React.ComponentProps<typeof DialogPrimitive.Close>) {
    return <DialogPrimitive.Close data-slot='dialog-close' {...props} />;
}

/**
 * 在对话框后面显示的半透明遮罩层。
 *
 * @param {object} props - 组件属性。
 * @param {string} [props.className] - 应用于组件的额外 CSS 类。
 * @returns {JSX.Element} 渲染后的对话框遮罩层组件。
 */
function DialogOverlay({
                         className,
                         ...props
                     }: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
    return (
        <DialogPrimitive.Overlay
            data-slot='dialog-overlay'
            className={cn(
                'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
                className
            )}
            {...props}
        />
    );
}

/**
 * 对话框的主要内容区域。
 *
 * @param {object} props - 组件属性。
 * @param {string} [props.className] - 应用于组件的额外 CSS 类。
 * @param {React.ReactNode} props.children - 要在对话框中渲染的子组件。
 * @param {boolean} [props.showCloseButton] - 如果为 true，则显示关闭按钮。
 * @returns {JSX.Element} 渲染后的对话框内容组件。
 */
function DialogContent({
                         className,
                         children,
                         showCloseButton = true,
                         ...props
                     }: React.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
}) {
    return (
        <DialogPortal data-slot='dialog-portal'>
            <DialogOverlay />
            <DialogPrimitive.Content
                data-slot='dialog-content'
                className={cn(
                    'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
                    className
                )}
                {...props}
            >
                {children}
                {showCloseButton && (
                    <DialogPrimitive.Close
                        data-slot='dialog-close'
                        className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                    >
                        <XIcon />
                        <span className='sr-only'>Close</span>
                    </DialogPrimitive.Close>
                )}
            </DialogPrimitive.Content>
        </DialogPortal>
    );
}

/**
 * 对话框的头部区域。
 *
 * @param {object} props - 组件属性。
 * @param {string} [props.className] - 应用于组件的额外 CSS 类。
 * @returns {JSX.Element} 渲染后的对话框头部组件。
 */
function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot='dialog-header'
            className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
            {...props}
        />
    );
}

/**
 * 对话框的尾部区域。
 *
 * @param {object} props - 组件属性。
 * @param {string} [props.className] - 应用于组件的额外 CSS 类。
 * @returns {JSX.Element} 渲染后的对话框尾部组件。
 */
function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot='dialog-footer'
            className={cn(
                'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
                className
            )}
            {...props}
        />
    );
}

/**
 * 对话框的标题。
 *
 * @param {object} props - 组件属性。
 * @param {string} [props.className] - 应用于组件的额外 CSS 类。
 * @returns {JSX.Element} 渲染后的对话框标题组件。
 */
function DialogTitle({
                       className,
                       ...props
                   }: React.ComponentProps<typeof DialogPrimitive.Title>) {
    return (
        <DialogPrimitive.Title
            data-slot='dialog-title'
            className={cn('text-lg leading-none font-semibold', className)}
            {...props}
        />
    );
}

/**
 * 对话框的描述。
 *
 * @param {object} props - 组件属性。
 * @param {string} [props.className] - 应用于组件的额外 CSS 类。
 * @returns {JSX.Element} 渲染后的对话框描述组件。
 */
function DialogDescription({
                             className,
                             ...props
                         }: React.ComponentProps<typeof DialogPrimitive.Description>) {
    return (
        <DialogPrimitive.Description
            data-slot='dialog-description'
            className={cn('text-muted-foreground text-sm', className)}
            {...props}
        />
    );
}

export {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
};
