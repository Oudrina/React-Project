import "./ProductPage.css";
import Category from "../Category/Category";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
export function ProductPage({handleClick}) {
 const [products, setProducts] = useState([]);



  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:8080/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

     


  return (
    <>
      <title>Ecormmence Products</title>

          <Category/>

      {products ? (
        <div className="product-page-container">
          <div className="products-page">
            {products.map((product) => {
              return (
                <div key={product.id} className="product">
                  <img
                    src={`http://localhost:8080/products/${product.id}/image`}
                    alt=""
                  />

                  <div className="prduct-description">
                    <Link to={"/product/" + product.id}>{product.name}</Link>
                  </div>

                  <div className="star-icons">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star-half"></i>
                  </div>

                  <div className="price-quantity">
                    <div className="product-price">
                      {/* {" "} */}
                      ${product.price.toFixed(2)}
                    </div>
                    <input
                      className="quantity-input"
                      type="number"
                      name="quantity"
                      id="quantity"
                      placeholder="1"
                    />
                  </div>

                  <button className="cart-button" onClick={()=>{handleClick}}>
                    Add to cart</button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <p>No Product Availble</p>
        </div>
      )}
    </>
  );
}
