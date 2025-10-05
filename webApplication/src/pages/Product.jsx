import axios from 'axios';
import './Product.css'
import { Link} from 'react-router-dom';
 function Product( {product, quantity,setQuantity} ){

  console.log( product.id ,quantity)

   const addToCart = async()=>{

       alert("Wnat to add to cart")
         try {
              const response = await axios.post(`http://localhost:8080/cart/${product.id}/qty/${quantity}`)
         console.log(response.data)
         
        //  navigate('/cart')
          } catch (error) {
            console.error(error)
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
                <span>{product.rating||0}</span>
              </div>
            </div>
            <div className="quantity-added">
              <span>Quantity : </span>  
              <input 
                type="number" 
                name="quantity"
                id="quantity"
                placeholder='1'
                value={quantity}
                min={1}
                onChange={(e)=>setQuantity(Number(e.target.value))} 
              />
            </div>
            <div className='product-button'>
              <button  onClick={()=>addToCart()} >
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