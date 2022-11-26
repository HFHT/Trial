import { useState } from "react";

interface IInput {
    type: string;
    value: string | number;
    setter: Function;
    title: string;
    classes?: string;
    defaultValue?: string;
}

export function Input(props: IInput) {
    const { type, value, setter, title, classes, defaultValue } = props;
    const [theValue, setTheValue] = useState(value)
    const [spanTitle, setSpanTitle] = useState('')

    const handleChange = (inputValue:any) =>{
        console.log(inputValue.length>0)
        setTheValue(inputValue)
        setSpanTitle((inputValue.length > 0) ? title : '') 
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
                        placeholder={title}
                        defaultValue={defaultValue}
                        onChange={(e)=> handleChange(e.target.value)}
                        onBlur={()=> setter(theValue)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 -mt-2 -ml-3">
                    </input>
                </label>
            </div>
        </>
    )
}