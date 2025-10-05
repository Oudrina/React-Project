import './Cart.css'
import CartItem from './CartItem'

function Carts( {carts, }){


    return (
        <>
           <div className="sidebar-wrapper">

            {carts.length > 0 ? carts.map((cart)=>{
                return(
            <CartItem key={cart.id} carts={cart}
              product={cart.product}
              />  

                )
            })
              
            : <div>Cart is empty</div>
           }      
           </div>
        </>
    )
}
export default Carts