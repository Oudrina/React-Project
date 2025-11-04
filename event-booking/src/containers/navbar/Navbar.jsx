import React, { useState } from 'react'
import {MdMenu} from 'react-icons/md'
import './navbar.css'
const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  return (
    <nav className='app__navbar__container'>
      <h1 className='app__navbar__heading'>Event Booking</h1>

      <div className='app__navbar__links'>
        <ul>
          <li><a href="#home">Home</a></li>
           <li><a href="#event">Events</a></li>
          <li><a href="#footer">Contact Us</a></li>
        </ul>
      </div>

      <div className="app__navbar__signin">
        <div className='app__navbar__event-book' >
          BookEvent
        </div>

          <div  className='app__navbar-dot'/> 

          <div className='app__navbar__signin__wrapper'>
          <button className='app__navbar__signin-button'>Sign in</button>

          </div>

          <div className="navbar__sidebar_menu">
            <MdMenu  size={30} color='white' onClick={()=>settoggle(!toggle)} className='navbar__sidebar_menu-togglebutton'/>
            {toggle && 
            
              <div className='navbar__sidebar_menu_links'>
                    <div className='navbar__sidebar_menu__full'>

                  
                   <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#event">Events</a></li>
                    <li><a href="#home">Contact Us</a></li>
                  </ul>
                   
                    <div className='app__navbar__signin__menu__wrapper'>
                   <button className='app__navbar__signin__menu-button'>Sign in</button>

                    </div>
                    </div>

                  
            </div>
            }
          
          </div>
      </div>
      </nav>
  )
}

export default Navbar