import { Spinner } from "flowbite-react";
import useUser from "../hooks/useUser";
import DashboardTabs from "./DashboardTabs";

export default function Dashboard(){
    const {loading,role,user} = useUser()
    if(loading) return <div className="flex items-center justify-center"><Spinner /></div>
    if(role!=="ADMIN" || !user) location.replace("/")

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col items-end">
                <a href="/dashboard/article/new" className="font-poppins bg-blue-600 px-3 py-1 rounded text-white font-bold">Nueva Publicación</a>

            </div>
            <h2 className="font-medium text-2xl font-poppins">Dashboard</h2>
            <DashboardTabs />
        </div>
    )
}