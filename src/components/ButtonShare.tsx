import { BiShare } from "react-icons/bi/index";

export default function ButtonShare(){
    const handleClick = async () => {
        if(navigator.share)
        await navigator.share({text:"A"})
        else alert("Tu navegador no soporta compartir")
    }

    return (
        <button onClick={handleClick}>
            <BiShare />
        </button>
    )
}