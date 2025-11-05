"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from '@/lib/utils';

/**
 * 一个标签。
 *
 * @param {object} props - 组件属性。
 * @param {string} [props.className] - 应用于组件的额外 CSS 类。
 * @returns {JSX.Element} 渲染后的标签组件。
 */
function Label({
                 className,
                 ...props
             }: React.ComponentProps<typeof LabelPrimitive.Root>) {
    return (
        <LabelPrimitive.Root
            data-slot='label'
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
