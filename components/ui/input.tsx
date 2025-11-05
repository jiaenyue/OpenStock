import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * 一个输入字段。
 *
 * @param {object} props - 组件属性。
 * @param {string} [props.className] - 应用于组件的额外 CSS 类。
 * @param {string} [props.type] - 输入类型（例如 "text"、"password"）。
 * @returns {JSX.Element} 渲染后的输入字段组件。
 */
function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
    return (
        <input
            type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
