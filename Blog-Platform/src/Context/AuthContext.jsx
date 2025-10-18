import axios from 'axios'
import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router';
  
 // eslint-disable-next-line react-refresh/only-export-components
 export   const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
     const [token, setToken] =useState(localStorage.getItem('token' ))
          const navigate = useNavigate()

// Login to the backend
      const login = async(username,password)=>{
        console.log(token)
        try {
             const response = await axios.post('http://localhost:8080/auth/api/v1/login',{
                username,
                password,
             },)
             console.log(response.data)
             setToken(response.data)
             localStorage.setItem("token",response.data)
             navigate("/")
        } catch (error) {
           console.log("NetworkError" ,error)  
        }

      
      }

    //   Logout function

    const logout =()=>{
        setToken(null)
        localStorage.removeItem("token")
          navigate("/")
    }
    // stores the values needed to be accessed outside

    const  values ={
        token,
        login,
        logout,
        isAuthenticated : !!token
    }

 return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
 }

 
  