import axios from 'axios'
import './ViewProduct.css'
import { useNavigate, useParams } from 'react-router'
import { useState } from 'react'
import { useEffect } from 'react'
function ViewProduct (){
    const {id , qty} = useParams()
    const [productData,setProductData]= useState({}) 
    const [quantity, setQuantity] =useState(Number(qty) || 1)
     const navigate = useNavigate()

    console.log({id , quantity})


    const handleCart = async()=>{
      await  addToCart()
    }
      const  addToCart = async()=>{
          alert("item added to cartItem")
          try {
              const response = await axios.post(`http://localhost:8080/cart/${productData.id}/qty/${quantity}`)
         setProductData(response.data)
           navigate("/cart")
         console.log(response.data)
          } catch (error) {
            console.error(error)
          }
       
 
        }
    

   useEffect(()=>{
     const ViewProductById = async()=>{
        try {
            const response = await axios.get(`http://localhost:8080/product/${id}`)
            console.log(response.data)
            setProductData(response.data);

        } catch (error) {
            console.error("Network err",error)
        }
       
    }
    ViewProductById()
   },[id])

   
    
    return(
        <>
        <div className="main-wrapper">
        {productData && 
            <div className="product-wrapper-div">

                <img src="/images/product6.jpg" alt="" />

                <div className="product-details-description">
                    <h4>{productData.name}</h4>

                    <div className="product-description-view">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptates tempora repudiandae atque! Quos, minima voluptate deleniti necessitatibus minus veniam, nemo consectetur dolorum iure itaque, rerum ducimus. A, aut accusamus?</p>
                    </div>
                        <div className="product-price">
                            <span className='span-price'>$ {productData.price}</span>
                        </div>
                           <div className="product-qauntity">
                          <span className='span-qty'>Qty: <input type="number" name="quantitys" id="quantitys"  min={1} placeholder='1'
                            value={quantity}
                            onChange={(e)=>setQuantity(Number(e.target.value))}

                          /> </span>  
                         
                           </div>
                            <div className='btn'>
                                <button onClick={handleCart} >
                                    Add to Cart
                                </button>
                            </div>
                                
                </div>
            </div>
        }
        </div>
    
        </>
    )
}

export default ViewProduct