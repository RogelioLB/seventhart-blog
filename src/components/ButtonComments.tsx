import { useState } from "react";
import { BiComment, BiPlus } from "react-icons/bi/index";

const Comments = ({comments, onClose, show} : {onClose:()=>void, show:boolean}) => {
    return(
        <div className={`${show ? "pointer-events-auto bg-black/30" : "bg-transparent pointer-events-none"} w-full fixed h-screen top-0 left-0 z-20 transition-colors`} onClick={e=>{
            e.stopPropagation()
            onClose()
        }}>
            <div className={`w-full sm:w-80 fixed top-0 right-0 bg-slate-50 h-screen z-30 p-4 ${show ? "translate-x-0" : "translate-x-full"} transition-transform`}>
                <div className="flex justify-between items-center mb-8">
                    <h3 className="">Comentarios (0):</h3>
                    <button onClick={onClose} className="text-3xl" ><BiPlus className="rotate-45"/></button>
                </div>
                <div className="flex items-center flex-col">
                    {!comments && <span className="text-sm font-semibold">Aun no hay comentarios.</span>}
                </div>
            </div>
        </div>
    )
}

export default function ButtonComments(){
    const [show,setShow] = useState(true);

    const handleOpen = () =>{
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    return(
        <>
            <button onClick={handleOpen}><BiComment /></button>
            <Comments onClose={handleClose} show={show}/>
        </>
    )
}