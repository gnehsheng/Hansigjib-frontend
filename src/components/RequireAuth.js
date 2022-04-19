import { useLocation, Navigate, Outlet} from "react-router-dom";
import {useEffect} from "react"
import useAuth from "../hooks/useAuth"

const RequireAuth = () => {
    const {auth} = useAuth()
    const location = useLocation()

    useEffect (() => {
            //console.log("auth", auth)

    },[auth])
     //console.log(auth)
     //console.log(auth != "user=")
    return(
        //auth?.result
        auth != "user=" || auth == ""
        ? <Outlet />
        : <Navigate to="/login" state={{from: location}} replace/>
    )
}

export default RequireAuth;