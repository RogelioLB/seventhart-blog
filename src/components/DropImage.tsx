import { ChangeEvent, DragEvent, MouseEvent, useRef } from "react"
import {FaTimes} from "react-icons/fa/index"

export default function DropImage({previewUrl,onImage}:{previewUrl?:string,onImage:(image?:File)=>void}){
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = (e:MouseEvent) =>{
        e.preventDefault()
        inputRef.current?.click()
    }

    const handleOndragOver = (e:DragEvent) => {
        e.preventDefault();
    }
    const handleOndrop = (e:DragEvent) => {
        e.preventDefault(); 
        e.stopPropagation();
        let imageFile = e?.dataTransfer.files[0];
        onImage(imageFile)
    }

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) return
        const imageFile = e.target.files[0]
        onImage(imageFile)
    }

    const handleDeleteImage = (e:MouseEvent) => {
        e.preventDefault()
        onImage(undefined)
    }

    return (
        <>
            {previewUrl ? 
            <div className="relative">
                <button onClick={handleDeleteImage} className="absolute p-4 right-4 top-4 bg-red-600 text-white rounded-full"><FaTimes /></button>
                <img src={previewUrl} className="mx-auto"/> 
            </div>
            :
            <div onDrop={handleOndrop} onDragOver={handleOndragOver} className="w-full h-72 border-dashed border-4 border-blue-500 flex justify-center items-center flex-col gap-1">
                <input onChange={handleInputChange} type="file" hidden accept="image/*" ref={inputRef}/>
                <button onClick={handleClick} className="bg-blue-500 rounded text-white px-4 py-2 font-bold">Subir imagen</button>
                <span>O arrastra la imagen aqui.</span>
            </div> 
            }
        </>
    )
}