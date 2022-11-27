import { useState } from "react";

interface IInput {
    type: string;
    value: string | number;
    setter: Function;
    title: string;
    classes?: string;
    defaultValue?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    required?: boolean;
    size?: number;
    max?: number | string | undefined;
    min?: number | string | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
}

export function Input(
    {
        type, value, setter, title, classes, defaultValue, autoFocus = false, disabled = false, size = 0,
        required = false, min = undefined, max = undefined, minLength = undefined, maxLength = undefined
    }: IInput) {
    const [theValue, setTheValue] = useState(value)
    const [spanTitle, setSpanTitle] = useState('')
    const displayTitle = title + (required && ' *')
    const handleChange = (inputValue: any) => {
        console.log(inputValue.length > 0)
        setTheValue(inputValue)
        setSpanTitle((inputValue.length > 0) ? displayTitle : '')
    }

    return (
        <>
            <div className="">
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-400 focus-within:text-blue-500 dark:focus-within:text-blue-500 bg-white dark:bg-gray-700 ">
                    <span className="bg-gray-50 dark:bg-gray-700">
                        {spanTitle}<span>&#8203;</span>
                    </span>
                    <input
                        type={type}
                        value={theValue}
                        placeholder={displayTitle}
                        defaultValue={defaultValue}
                        alt={title}
                        disabled={disabled} autoFocus={autoFocus} required={required} size={size}
                        min={min} max={max} minLength={minLength} maxLength={maxLength}
                        onChange={(e) => handleChange(e.target.value)}
                        onBlur={() => setter(theValue)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 -mt-2 -ml-3">
                    </input>
                </label>
            </div>
        </>
    )
}