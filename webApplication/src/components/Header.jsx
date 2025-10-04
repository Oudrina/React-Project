import './Header.css'
import 'boxicons/css/boxicons.min.css';
import { useState } from 'react';
import { Link } from 'react-router';
function Header(){
    const [search,setSearch] = useState('')
    console.log(search)
   

    return(
        <>
        <div className="header-wrapper">
            <Link to={'/'}>
             <h3>Ecommerce</h3>
            </Link>
            <div className="search-bar">
                <input type="search" name="search" 
                id="search"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                 placeholder='Search for prducts...' />

                <div className='search-icon'>
                    <button type='submit' >
                     <i className='bx bx-search'></i>

                    </button>
                </div>
            </div>

                <div className="cart-button">
                     <button type='submit'>
                    <i className='bx bx-cart'></i>                 
                    </button>
                    <div className='quantity-wrapper'>
                        <p className='span-sount'>1</p>
                    </div>
                   </div>
        </div>
        </>
    )
}

export default Header