import type { InputHTMLAttributes } from "react";

export default function FormGroup(props:{input:InputHTMLAttributes<HTMLInputElement>,label:string,htmlFor:string}){
    const {value,onChange,type,placeholder} = props.input
    const {label} = props
    return(
        <div className="flex flex-col gap-1">
            <label htmlFor={props.htmlFor}>{label}</label>
            <input name={props.htmlFor} id={props.htmlFor} value={value} onChange={onChange} className="outline-none border-none px-4 py-2 bg-zinc-100 rounded" type={type} placeholder={placeholder} />
        </div>
    )
}