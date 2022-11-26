import { useState } from "react";

interface ISelect {
    value: string | number;
    setter: Function;
    title?: string | null;
    classes?: string;
    defaultValue?: string;
    children?: React.ReactNode;
}

export function Select(props: ISelect) {
    const { value, setter, title, classes, defaultValue, children } = props;
    const [theValue, setTheValue] = useState(value)

    return (
        <>
            <div className="">
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-400 focus-within:text-blue-500 dark:focus-within:text-blue-500 bg-white dark:bg-gray-700 ">
                    <span className="bg-gray-50 dark:bg-gray-700">
                        {title}
                    </span>
                    <select
                        value={theValue}
                        defaultValue={defaultValue}
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