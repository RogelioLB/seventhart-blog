import { supabase } from "../database"

export default function SignIn({redirectTo}:{redirectTo:string}){
    console.log(new URL(redirectTo,import.meta.env.PUBLIC_BASE_URL).toString())
    return (
        <button onClick={async()=>{
            const {data,error} = await supabase.auth.signInWithOAuth({provider:"google",options:{
                redirectTo:new URL(redirectTo,import.meta.env.PUBLIC_BASE_URL).toString()
            }})
            console.log(data.url)
        }}>Iniciar sesion</button>
    )
}