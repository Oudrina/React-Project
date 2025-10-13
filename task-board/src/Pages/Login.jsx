import React from 'react'
import './Login.css' 
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
  

function Login() {
    const[username,setUsername] =useState('')
    const[password,setPassword] =useState('')
    const[validation,setValidation] = useState(false)
    const navigate = useNavigate()
   const handleForm = async (e)=>{
      e.preventDefault()
      loginSubmit()
   }
     const loginSubmit =  async()=>{
        const loginData ={username,password}
        try {
            const response = await axios.post(
         'http://localhost:8080/user/login',loginData,
        
         {
           headers: {
             'Content-Type': 'application/json'
           }
         }
       );
       console.log( "token",response.data)
       localStorage.setItem( "token",response.data)
       if(response.status === 200){
        navigate("/")
       }else
          navigate("/login")
          
        } catch (error) {
              console.error(error)
        }
      

       setUsername("")
       setPassword("")
     }

  return (
    <div
    className='Login-wrapper'>
        
        <div className="form-wrapper">
             <h5>Login</h5>           
             <form  onSubmit={ handleForm}>
                <div>
                   <label htmlFor="username">Username</label>
                     <input type="text"
                       name="username"
                       id="username" 
                        className='login-input'
                     placeholder='Enter your user name' 
                     required 
                     value={username}
                     onChange={(e)=>setUsername(e.target.value)}
                     onMouseDown={()=>setValidation(true)}
                     />
                      {username.length===0&& validation&&
                        <span className='login-span'>
                            Username required to login
                        </span>
                        }
                </div>
                <div>
                   <label htmlFor="password">Password</label>
                     <input type="password" name="password" id="password"className='login-input'
                      placeholder='Enter your password' 
                      required 
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      onMouseDown={()=>setValidation(true)}
                      
                      />
                        {password.length<=5 &&
                        validation&&
                      <span className='login-span'>
                        Password must be more than 5 characters
                      </span>
                       }
                </div>
                  <div>
                    <button className='login-button'>
                        
                            login
                        
                    </button>
                  </div>
                  <p>Dont have and account yet? <Link to={'/signup'}>Sign up</Link> </p>
             </form>
        </div>
        
        </div>
  )
}

export default Login