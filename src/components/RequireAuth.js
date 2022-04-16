import { useLocation, Navigate, Outlet} from "react-router-dom";
import {useEffect} from "react"
import useAuth from "../hooks/useAuth"

const RequireAuth = () => {
    const {auth} = useAuth()
    const location = useLocation()

    useEffect (() => {
            console.log("auth", auth)

    },[auth])
     
    return(
        auth?.result
        ? <Outlet />
        : <Navigate to="/login" state={{from: location}} replace/>
    )
}

export default RequireAuth;