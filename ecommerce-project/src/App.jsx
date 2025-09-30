import { ProductPage } from "./pages/ProductPage/ProductsPage";
import { FooterPage } from "./component/FooterPage";
import { Cart} from "./pages/Cart/Cart";
import { Routes, Route } from "react-router";
import { NavBar } from "./component/NavBar";
import { OrderPages } from "./pages/Orders/OrderPages";
import { AddProduct } from "./pages/AddProducts/AddProduct";
import Product from "./pages/SingleProduct/Product";
import AddCategories from "./pages/Category/AddCategories";
import "boxicons/css/boxicons.min.css";

import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const[cart, setCart]= useState([])  

    const  handleClick =  (cartId)=>{
       console.log(cartId)
    }

  useEffect(()=>{
            const getCart = async ()=>{
                try {
            const  cartId = 1;
                const response = await axios.get(`http://localhost:8080/carts/${cartId}`)
                setCart(response.data)
                console.log(response.data)
                } catch (error) {
                    console.log(error)
                }
            
            }

      getCart();
  },[])
   
  return (
    <div className="app-conatiner">
      <div>
        <NavBar  cart={cart}/>
      </div>

      <main>
        <Routes>
          <Route path="/" element={<ProductPage handleClick={handleClick} />} />
          <Route path="checkout/" element={<Cart  cart={cart}/>} />
          <Route path="orders" element={<OrderPages />} />
          <Route path="add" element={<AddProduct />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/addcategories" element={<AddCategories/>} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </main>

      <div className="footer-app">
        <FooterPage />
      </div>
    </div>
  );
}

export default App;
