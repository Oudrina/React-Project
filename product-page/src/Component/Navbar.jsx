import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar = () => {
  const cartProducts = useSelector(state =>state.cart)
  return (
    <div className='navbar__wrapper'>
        <div className='navbar__heading'>
      <h2>Eccormerce</h2>
        </div>
        <Link to={"/cart"}>
          <div className='navber__cart'> 
            <p>Cart</p>
            <span>{cartProducts.length}</span>

         </div>
        </Link>
       
        
    </div>
  )
}

export default Navbar