import { useContext } from "react"
import {AuthContext}  from '../Context/AuthContext'
export function useAuth(){
    const context = useContext(AuthContext)

    if(!context){
        throw new Error("Auth Context not available")
    }
    return context
 }

