import { useState, type HTMLInputTypeAttribute, ChangeEvent } from "react";

export default function useInput(default_value?:string|number|string[]) : [string|number|string[]|undefined,(e: ChangeEvent<HTMLInputElement>) => void] {
    const [value,setValue] = useState(default_value)

    const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
    }

    return [value,onChange]
}