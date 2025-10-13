import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router'
import axios from 'axios'

function SignUp() {
     const[username,setUsername] =useState('')
     const[email,setEmail] =useState('')
     const[password,setPassword] =useState('')
     const[confrimPassword,setConfirmPassword] =useState('')
    const[validation,setValidation] = useState(false)

    console.log({username,email,password,confrimPassword})

   function registerForm(e){
        e.preventDefault()
        signupPost()
    }

    const  signupPost = async ()=>{
        const formData ={username,email,password,confrimPassword}
                try {
                    const response = await axios.post('http://localhost:8080/user/signup',formData,{headers:{
                            "Content-Type":'application/json'
                        }})
                        console.log(response.data)

                } catch (error) {
                    console.error(error)
                }
        
     }
  return (
   <div
    className='Login-wrapper'>
        
        <div className="form-wrapper">
             <h5>Register</h5>           
             <form  onSubmit={registerForm} >
                <div>
                   <label htmlFor="username">Username</label>
                     <input type="text" name="username" id="username"  className='login-input'
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

                    <label htmlFor="email">Email</label>
                     <input type="email" name="email" id="email"  className='login-input'
                     placeholder='Enter your email' 
                     required 
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     onMouseDown={()=>setValidation(true)}
                     />
                      {email.length===0&& validation&&
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
                   <label htmlFor="password">Confirm Password</label>
                     <input type="password" name="password" id="con-password"className='login-input'
                      placeholder='Enter your password' 
                      required 
                      value={confrimPassword}
                      onChange={(e)=>setConfirmPassword(e.target.value)}
                      onMouseDown={()=>setValidation(true)}
                      
                      />
                        {confrimPassword !== password &&
                        validation&&
                      <span className='login-span'>
                        Password must match
                      </span>
                       }
                </div>


                  <div>
                    <button className='login-button'>
                        
                            login
                        
                    </button>
                  </div>
                  <p>Already have an account <Link to={'/login'}>Login</Link> </p>
             </form>
        </div>
        
        </div>
  )
  
}

export default SignUp