import { BiHeart } from "react-icons/bi/index";
import useUser from "../hooks/useUser";
import useLike from "../hooks/useLike";

export default function ButtonHearth({article_id}:{article_id?:number}){
    const {user} = useUser()
    const {liked,handleLike,loading} = useLike(user?.id as string,article_id as number)

    return(
        <button disabled={loading} className={`transition-colors flex-1 flex items-center justify-center ${liked ? 'text-blue-500' : 'text-inherit'}`} onClick={handleLike}>
            <BiHeart />
        </button>
    )
}