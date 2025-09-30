import './Header.css'
import 'boxicons/css/boxicons.min.css';
import { BiSearchAlt2 } from 'react-icons/bi'
function Header(){
    return(
        <>
        <div className="header-wrapper">
            <h3>Ecommerce</h3>
            <div className="search-bar">
                <input type="search" name="search" id="search" placeholder='Search for prducts...' />

                <div className='search-icon'>
                    <button type='submit'>
                     <i className='bx bx-search'></i>

                    </button>
                </div>
            </div>

                <div className="cart-button">
                     <button type='submit'>
                    <i className='bx bx-cart'></i>                 
                    </button>
                    <div className='quantity-wrapper'>
                        <span>0</span>
                    </div>
                   </div>
        </div>
        </>
    )
}

export default Header