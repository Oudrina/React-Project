import React, { useState } from 'react'
import './Login.css'
function Login({showClose}) {
    const[username,setUsername] = useState('')
    const[password,setPassword]= useState('')
    const[validation,setValidation]=useState(false)
    console.log({username,password})
  return (
    <>
  
  <div className="logins">
 
    <div  className="login-wrapper-main">

      
  
        <div className="login-wrapper">
           
            <div className='header'> 
            <h4>Login</h4> 
                <div  className='close-btn' onClick={()=>showClose(false)}>
                         <i className='bx bx-x'></i>

                </div>
            </div>
            <form  method="post">
              
                <input type="text"name='username'  
                placeholder='Enter your username'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                onMouseDown={()=>setValidation(true)}/>
                
                {username.length ===0 && validation && <span>Username is required</span>
}
               
              
                    <input type="password" name="password"  
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    onMouseDown={()=>setValidation(true)}
                    />
                        {password==0 &&validation && <span>Password is required</span>}    


                            <div>
                            <button>
                            Login
                            </button>
                            </div>
                                        
            </form>
        </div>

    
        

    </div>

     </div>
      </>
  )
}

export default Login