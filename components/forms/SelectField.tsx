import React from 'react';
import { Label } from '@/components/ui/label';
import { Control, Controller, FieldError } from 'react-hook-form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

/**
 * SelectField 组件的属性。
 * @property {string} name - 字段的名称。
 * @property {string} label - 字段的标签。
 * @property {string} placeholder - 字段的占位符文本。
 * @property {Array<{value: string, label: string}>} options - 选择选项的数组。
 * @property {Control<any>} control - 来自 react-hook-form 的 control 对象。
 * @property {FieldError} [error] - 来自 react-hook-form 的 error 对象。
 * @property {boolean} [required] - 指示字段是否为必填项。
 */
type SelectFieldProps = {
    name: string;
    label: string;
    placeholder: string;
    options: { value: string; label: string }[];
    control: Control<any>;
    error?: FieldError;
    required?: boolean;
};

/**
 * 渲染一个带有标签和错误消息的选择字段。
 *
 * @param {SelectFieldProps} props - SelectField 的属性。
 * @returns {JSX.Element} 一个包含标签、选择和错误消息的选择字段。
 */
const SelectField = ({
                       name,
                       label,
                       placeholder,
                       options,
                       control,
                       error,
                       required = false,
                   }: SelectFieldProps) => {
    return (
        <div className='space-y-2'>
            <Label htmlFor={name}>{label}</Label>

            <Controller
                name={name}
                control={control}
                rules={{
                    required: required ? `Please select ${label.toLowerCase()}`:false,
                }}
                render={({field}) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="select-trigger">
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 text-white">
                            {options.map((option) => (
                                <SelectItem key={option.value} value={option.value} className="focus:bg-gray-600 focus: text-white">
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                        {error && <p className="text-red-600">{error.message}</p>}
                    </Select>
                )}
            />
        </div>
    )
}
export default SelectField
