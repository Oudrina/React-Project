  import'./NavBar.css'
  import 'boxicons'
  import { Link } from 'react-router';

export function  NavBar(){
//  const [keyword , setKeyword] = useState()
    return(
        <>
         <nav className="navbar">
            <Link to={"/"} className='navbar-link'>
            <h1 className="logo">Ecommerce</h1>
            </Link>
              
              <div className='search-bar-container'>

                 <input type="text" 
                  className='search-bar' 
                 placeholder='search for products'
                 
                 />
                 <div className='icon'>
                    <i className='bx bx-search-alt-2' ></i>
                 </div>
              
              </div> 

              <div className='cart-order-container'>

                <div className='cart-icon-span'>
                  <Link to={"/checkout"} className=' cart-icon-span'>
                         <div className="ordericon">
                            <i className='bx bx-cart-alt'></i>
                         </div>
                        <span className='cart'> Cart</span>
                        <span className='quantity'></span>
                   </Link>

                </div>
                <Link to={"/orders"} className=' cart-icon-span'>
                 <span className='orders-span'>Orders</span>
                 </Link>
              </div>

        </nav>

       

     </>
    );
     
 }