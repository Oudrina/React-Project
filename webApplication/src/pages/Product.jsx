import { useState } from 'react'
import './Product.css'
import { Link } from 'react-router-dom';
 function Product( {setCount ,product} ){

   const [quantity,setQuantity] = useState(1)
   console.log(quantity)

      function handleChange(){
        const qnty = parseInt(quantity) 
        if(qnty>0){
          setCount(preCount => preCount + qnty)
        }

       
      } 

    return(
      <>
        <div className="product-wrapper">
          <img src="/images/product6.jpg" alt="ProductImage" />

          <div className="product-description">
            <h6>
             <Link to={`/view/${product.id}`}>
              { product.name}                  
             </Link>
            </h6>
              
            <div className="product-price">
               <span>{product.price}</span>
            </div>

            <div className="product-rating">
              <i className='bx bxs-star'></i>
              <span>.</span>
              <div className='rating-count'>
                <span>{product.rating}</span>
              </div>
            </div>
            <div className="quantity-added">
              <span>Quantity : </span>  
              <input 
                type="number" 
                name="quantity"
                id="quantity"
                value={quantity}
                min={1}
                onChange={(e)=>setQuantity(Number(e.target.value))} 
              />
            </div>
            <div className='product-button'>
              <button onClick={handleChange}>
                <i className='bx bx-cart'></i>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </>
    )
 }
  export default Product