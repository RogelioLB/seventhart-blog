import { supabase } from "../database"

export default function SignIn({redirectTo}:{redirectTo:string}){
    const handleSingIn = async () => {
        const {data,error} = await supabase.auth.signInWithOAuth({provider:"google",options:{
            redirectTo:new URL(redirectTo,import.meta.env.PUBLIC_BASE_URL).toString()
        }})
    }
    return (
        <button 
            onClick={handleSingIn}
            className="border-none bg-slate-50 shadow-sm shadow-black/30 flex gap-2 items-center p-2 font-medium rounded-full pr-4"
        >
            <img src="/google-icon.svg" className="w-8"/> Iniciar sesión
        </button>
    )
}