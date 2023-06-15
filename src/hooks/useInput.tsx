import { useState, type HTMLInputTypeAttribute, ChangeEvent } from "react";

export default function useInput(default_value:string|number|string[]) : [string|number|string[],(e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void] {
    const [value,setValue] = useState(default_value)

    const onChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        setValue(e.target.value)
    }

    return [value,onChange]
}