import React from 'react'
import Product from './Product'
import './cart.css'
import { removeCart} from '../Redux/cartSlice'
import { useDispatch } from 'react-redux'


const Cart = ({cart}) => {
  const dispatch = useDispatch()

  const removeCartProduct =(id)=>{
     dispatch(removeCart(id))
  }
  return (
     <div className='product__container__wrapper'>
        <div className='productImage'>
         
         <img src={cart.image} alt="Product-Image" />
        </div>
       
      <div className='cart__container'>
         <div className="product-description ">
            <p className='product__title'>{cart.title}</p>
         <p className='product__price'> $ {cart.price}</p>
         <div className='product__ratings'>
            <p className='product__rate'>{cart.rating.rate}</p>
            <span className='product__count'>{cart.rating.count}</span>
         </div>
        </div>
        <div className='product__button__cart'>
            <button  onClick={()=> removeCartProduct(cart.id)}>
               Remove Product
            </button>
        </div>
      </div>



  
       
    </div>

  )
}

export default Cart