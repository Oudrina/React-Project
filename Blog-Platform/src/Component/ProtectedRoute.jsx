import { useAuth } from '../Hooks/UseAuth'
import { Navigate } from 'react-router';



 const ProtectedRoute = ({children})=>{
     const {isAuthenticated} = useAuth()
     
  
     if(!isAuthenticated){
      <Navigate  to={"/login"} replace />
    }
      return children
   
    
 }

 export default ProtectedRoute