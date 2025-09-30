import { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";
import { useParams } from "react-router";

function Product() {
    const { id } = useParams();
  const [product, setProduct] = useState(null);


   const fetchProduct = async()=>{
    try{
       const response = await axios .get('http://localhost:8080/products/product/' + id)
       setProduct(response.data)
    }
     catch(error){
      console.error("Error happens" , error)
     }
   }


  useEffect(() => {
    // Simulate fetching product data
    fetchProduct();
  
   
  }),[id];

  return (
    product ?

      (
        <div>
          <div className="product-wrapper"  key={product.id}> 
          
          <img src={`http://localhost:8080/products/${product.id}/image`} alt="" />

            <div className="Content-product">
              <div className="productName">
                <h2>{product.name}</h2>
              </div>

              <div className="description">
                <p>{product.description}</p>
                <div className="price">
                  <h3> $ {product.price}</h3>
                </div>
                <div className="quantity-selector">
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    defaultValue="1"
                  />
                </div>
                <div className="add-cart">
                  <div type="submit" className="add-cart-button">
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      : <p>Loading product...</p>
  );
}

export default Product;
