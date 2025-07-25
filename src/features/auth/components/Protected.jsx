import { useSelector } from "react-redux"
import { selectLoggedInUser } from "../AuthSlice"
import { Navigate } from "react-router"

export const Protected = ({children}) => {
    const loggedInUser=useSelector(selectLoggedInUser)

    // Remove verification check - just check if user is logged in
    if(loggedInUser){
        return children
    }
    return <Navigate to={'/login'} replace={true}/>
}