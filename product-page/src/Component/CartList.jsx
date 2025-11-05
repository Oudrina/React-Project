import React from 'react'
import Cart from './Cart'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CartList = () => {
     const cartProduct = useSelector(state =>state.cart)
  console.log(cartProduct)
  const navigate = useNavigate()
    function homepage(){

    }
  
  return (
    <div className='cart__container'>
        { cartProduct.length > 0 ?  cartProduct.map(carts =>(
        <Cart  key={carts.id} cart ={carts}/>

        )) : 
        <div className=' empty__cart'> 
            <p>Cart Empty </p>
           
             <button onClick={()=>homepage(navigate("/"))}>
                Add Product to cart
            </button>
           
           

        </div>
        }



    </div>
  )
}

export default CartList