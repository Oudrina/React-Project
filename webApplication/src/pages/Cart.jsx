import './Cart.css'
import CartItem from './CartItem'
function Carts( {qauntity,setQuantity}){
    console.log(qauntity)

     

    return (
        <>
           <div className="sidebar-wrapper">
            
            <CartItem  qauntity ={qauntity}  setQuantity={setQuantity}/>         
           </div>
        </>
    )
}
export default Carts