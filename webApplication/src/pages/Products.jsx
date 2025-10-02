import { useEffect } from "react"
import Product from "./Product"
import './Products.css'
import axios from 'axios'

 function Products( {products, setProducts}){

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
     },[])

      

    return(
        <>
            <main className="main-products-wrapper">
                {products.length>0 ? products.map((product)=>{
                    return(
                      <Product  key={product.id} product={product}/>

                    )
                }) : <div>No products availabe</div>}

             </main>
        
        </>
    )
 }

 export default Products