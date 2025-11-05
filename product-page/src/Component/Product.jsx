import React from 'react'
import './product.css'
import { addToCart } from '../Redux/cartSlice'
import { useDispatch } from 'react-redux'

const Product = ({Product}) => {
  const dispatch = useDispatch()

    const addProductToCart = (Product)=>{

     dispatch(addToCart(Product))
    }

  return (
    <div className='product__wrapper'>
        <div className='productImage'>
         
         <img src={Product.image} alt="Product-Image" />

        </div>
        <div className="product-description">
            <p className='product__title'>{Product.title}</p>
         <p className='product__price'> $ {Product.price}</p>
         <div className='product__ratings'>
            <p className='product__rate'>{Product.rating.rate}</p>
            <span className='product__count'>{Product.rating.count}</span>
         </div>
        </div>
        <div className='product__button'>
            <button  onClick={()=> addProductToCart(Product)}>
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default Product