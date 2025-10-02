import { useState } from 'react'
import './AddProduct.css'
import axios from 'axios'
import { useNavigate } from 'react-router'
function AddProduct(){
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('') 
    const[validation,setValidation] = useState(false)
    console.log({name,description,price})
    const  navigate = useNavigate()

    function handlePost(e){
       e.preventDefault()

       const productData = {name,price,description}

       const addProduct = async()=>{
        try {
                    const reponse = await axios.post('http://localhost:8080/product',productData, {headers:{
                    'Content-Type':'application/json'
                    }}
                    )
                    console.log(reponse.data)

                     setName('')
                     setDescription('')
                     setPrice('')

                   navigate('/')
                
        } catch (error) {
            console.error("Unable to pass the data",error)
        }
        }
        
       addProduct()
    }

    
 return(
    <> <div className="form-wrapper">
                       <h6>Add Product</h6>

       <form action="" method="post" onSubmit={handlePost}>

               <div>
                    <label htmlFor="name">Product Name: </label>
                    <input type="text" name='name' id='name' placeholder="Product  name" required 
                     value={name}
                     onChange={(e)=> setName(e.target.value)}
                     onMouseDown={()=>setValidation(true)}
                    />
                          {name.length ===0 &&  
                          validation&&
                          <span className='errMsg'>Product Name required</span>}
                  </div>

                   <div>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name='description' id='description' placeholder="Product Description" required
                      value={description}
                     onChange={(e)=> setDescription(e.target.value)}
                     onMouseDown={()=>setValidation(true)}
                     />
                       {description.length ===0 &&  
                          validation&&
                          <span className='errMsg'>Description required</span>}
                  </div>
                   <div>
                    <label htmlFor="price">Price : </label>
                    <input type="number" name='price' id='price' placeholder="Product price"  required
                    value={price}
                     onChange={(e)=> setPrice(e.target.value)}
                     onMouseDown={()=>setValidation(true)}
                    />
                         {price.length===0 &&  
                          validation&&
                          <span className='errMsg'>Price required</span>}
                  </div>
                  <button type="submit">
                    Add product
                  </button>
       </form>
       </div>
    </>
 )
}

 export  default AddProduct