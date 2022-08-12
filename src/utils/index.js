import { useEffect, useState } from "react";

export const valueIsTrue = (value) => value === 0 ? true : !!value;

export const cleanObject = (object) => {
    const result = {...object};
    Object.keys(result).forEach(key => {
        const value = result[key];
        if(!valueIsTrue(value)) {
            delete result[key]
        }
    })
    return result
}


export const useMount = (func) => {
    useEffect(() => {
        func()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
} 

export const useDebounce = (value, delay) => {
     const [debouncedValue, setDebouncedValue] = useState(value);

     useEffect(() => {
        //在value变化时，设置定时器
        const handler = setTimeout(() => setDebouncedValue(value), delay)
        //⚠️⚠️每个useEffect都可以返回一个清除函数，React会在执行当前effect之前对上一个effect进行清除
        return () => clearTimeout(handler)
     }, [value, delay])
     
     return debouncedValue
}