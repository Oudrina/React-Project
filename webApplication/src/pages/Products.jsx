import { useEffect, useState } from "react"
import Product from "./Product"
import './Products.css'
import axios from 'axios'

 function Products( {products, setProducts }){
    const [quantity,setQuantity] =useState(1)

     useEffect(()=>{
                const getProducts = async()=>{
                try {
                    const response = await axios.get('http://localhost:8080/')
                   console.log(response.data)
                   setProducts(response.data)

               } catch (error) {
                        console.error(error)
                    }
         
           }
      getProducts()
     },[setProducts])


    return(
        <>
            <main className="main-products-wrapper">
                {products.length>0 ? products.map((product)=>{
                    return(
                      <Product  key={product.id} product={product} quantity={quantity} setQuantity={setQuantity}/>

                    )
                }) : <div>No products availabe</div>}

             </main>
        
        </>
    )
 }

 export default Products