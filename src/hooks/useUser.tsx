import type { User } from "@supabase/supabase-js";
import { supabase } from "../database";
import { useEffect, useState } from "react";

export default function useUser() : [User|null,boolean]{
    const [user,setUser] = useState<User | null>(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const getUser = async () =>{
            setLoading(true)
            const {data} = await supabase.auth.getUser()
            setUser(data.user)
            setLoading(false)
        }
        
        supabase.auth.onAuthStateChange((e,session)=>{
            if(session?.user) setUser(session.user)
            else setUser(null)
        })

        getUser()
    },[])

    return [user,loading]
}