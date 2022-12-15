import { useState } from "react";

interface ISelect {
    value: string | number;
    setter: Function;
    title: string;
    classes?: string;
    defaultValue?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    required?: boolean;
    size?: number;
    children?: React.ReactNode;
}

export function Select({ value, setter, title, classes, defaultValue, autoFocus=false, disabled=false, required=false, size=0, children }: ISelect) {
    const [theValue, setTheValue] = useState(value)
    return (
        <>
            <div className="">
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-400 focus-within:text-blue-500 dark:focus-within:text-blue-500 bg-white dark:bg-gray-700 ml-3">
                    <span className="bg-gray-50 dark:bg-gray-700">
                        {title + (required ? ' *' : '')}
                    </span>
                    <select
                        value={theValue}
                        defaultValue={defaultValue}
                        disabled={disabled} autoFocus={autoFocus} required={required} size={size} 
                        onChange={(e)=> setTheValue(e.target.value)}
                        onBlur={(e)=> setter(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 -mt-2 -ml-3">
                        {children}
                    </select>
                </label>
            </div>
        </>
    )
}