import type { User } from "@supabase/supabase-js";
import { supabase } from "../database";
import { useEffect, useState } from "react";

const getUserRole = async (user_id:string) =>{
    const roleData = await supabase.from("user_level").select("level(description)").eq("user_id",user_id).limit(1).single()
    return roleData.data?.level?.description
}

export default function useUser(){
    const [user,setUser] = useState<User | null>(null)
    const [role,setRole] = useState<string>()
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const getUser = async () =>{
            setLoading(true)
            const {data} = await supabase.auth.getUser()
            setUser(data.user)
            setRole(await getUserRole(data.user?.id as string))
            setLoading(false)
        }
        
        supabase.auth.onAuthStateChange(async (e,session)=>{
            if(session?.user) {
                setUser(session.user)
                setRole(await getUserRole(session.user.id))
            }
            else setUser(null)
        })

        getUser()
    },[])

    return {user,role,loading}
}