import React from 'react'
import '../components/Header.css'
import {Link} from 'react-router'
import { useState } from 'react'

 function Header() {
   const [loggedIn,setLoggedIn] = useState(false)
  return (
  <nav className='nav-bar-header'>
   <div className='headers'>
      <Link to={"/"}>
          <h4>To-Do Board</h4>

      </Link>
   
   {loggedIn ?  <Link to={'/'}>
       <div className='login-wrapper' onClick={()=>setLoggedIn(true)}>
       <h6>LogOut</h6>
    </div>
    </Link>  :( <Link to={'/login'}>
       <div className='login-wrapper' onClick={()=>setLoggedIn(true)}>
       <h6>Login</h6>
    </div>
    </Link>)}
   
 
   </div>
  </nav>
  )
}
export default Header
