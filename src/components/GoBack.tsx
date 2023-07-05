import {AiOutlineArrowLeft} from "react-icons/ai/index"

export default function GoBack(){
    const handleClick = () =>{
        history.back()
    }
    return (
        <div className="p-4 flex items-center justify-center text-xl cursor-pointer" onClick={handleClick}>
            <AiOutlineArrowLeft />
        </div>
    )
}