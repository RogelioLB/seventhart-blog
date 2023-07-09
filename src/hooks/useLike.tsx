import { useEffect, useState } from "react";
import { supabase } from "../database";

const likesExist = async (user_id:string,article_id:number) =>{
    const like_data = (await supabase.from("likes").select("*").eq("user_id",user_id).limit(1).single()).data
    return like_data
}

export default function useLike(article_id:number,user_id?:string){
    const [liked,setLiked] = useState<boolean>()
    const [loading,setLoading] = useState<boolean>(false)

    useEffect(()=>{
        likesExist(user_id as string,article_id).then(like_data=>{
            console.log(like_data)
            if(like_data) setLiked(true)
            else setLiked(false)
        })
    },[user_id])

    const handleLike = async () => {
        setLoading(true)
        const like_data = await likesExist(user_id as string,article_id)
        if(like_data) {
            await supabase.from("likes").delete({count:"exact"}).eq("id",like_data.id)
            setLiked(false)
        }else{
            await supabase.from("likes").insert({article_id:article_id as number,user_id:user_id as string})
            setLiked(true)
        }
        setLoading(false)
    }

    return {liked,handleLike,loading}
}