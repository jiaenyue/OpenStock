import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { FieldError, UseFormRegister } from 'react-hook-form';

/**
 * InputField 组件的属性。
 * @property {string} name - 字段的名称。
 * @property {string} label - 字段的标签。
 * @property {string} placeholder - 字段的占位符文本。
 * @property {string} [type] - 输入类型（例如 "text"、"password"）。
 * @property {UseFormRegister<any>} register - 来自 react-hook-form 的 register 函数。
 * @property {FieldError} [error] - 来自 react-hook-form 的 error 对象。
 * @property {object} [validation] - react-hook-form 的验证规则。
 * @property {boolean} [disabled] - 指示字段是否被禁用。
 * @property {string} [value] - 字段的初始值。
 */
type FormInputProps = {
    name: string;
    label: string;
    placeholder: string;
    type?: string;
    register: UseFormRegister<any>;
    error?: FieldError;
    validation?: object;
    disabled?: boolean;
    value?: string;
};

/**
 * 渲染一个带有标签和错误消息的输入字段。
 *
 * @param {FormInputProps} props - InputField 的属性。
 * @returns {JSX.Element} 一个包含标签、输入和错误消息的输入字段。
 */
const InputField = ({
                      name,
                      label,
                      placeholder,
                      type = 'text',
                      register,
                      error,
                      validation,
                      disabled,
                      value,
                  }: FormInputProps) => {
    return (
        <div className='space-y-2'>
            <Label htmlFor={name} className='form-label'>
                {label}
            </Label>
            <Input
                type={type}
                id={name}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                className={cn('form-input', {'opacity-50 cursor-not-allowed': disabled})}
                {...register(name, validation)}
            />
            {error && <p className="text-red-500">{error.message}</p>}
        </div>
    )
}
export default InputField
