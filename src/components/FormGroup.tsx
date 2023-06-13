import type { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

export default function FormGroup(props:{input:InputHTMLAttributes<HTMLInputElement>,label:string}){
    const {value,onChange,type,placeholder} = props.input
    const {label} = props
    return(
        <div className="flex flex-col gap-1">
            <label>{label}</label>
            <input value={value} onChange={onChange} className="outline-none border-none px-4 py-2 bg-zinc-100 rounded" type={type} placeholder={placeholder} />
        </div>
    )
}