import { BiShare } from "react-icons/bi/index";

export default function ButtonShare({title}:{title:string}){
    const handleClick = async () => {
        if(navigator.share)
        await navigator.share({text:"Rapido, echa un vistazo a este articulo.",title, url: location.href})
        else alert("Tu navegador no soporta compartir")
    }

    return (
        <button onClick={handleClick}>
            <BiShare />
        </button>
    )
}