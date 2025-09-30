import {  useState } from 'react';
import './AddProduct.css'
import axios from 'axios';

export function AddProduct(){
  const [product , setProduct] = useState({
    name:'',
    description:'',
    price:'',
    releaseDate:'',
    stockQuantity:'',
    // image :''
  });
  
  const [image , setImage] = useState(null)

  function handleChange(e){
    const {name, value} = e.target
    setProduct({   ...product, [name]:value})
  }
   
  function handleImageChange(e){
      setImage(e.target.files[0])
  }
  
  function submitForm(e){
    e.preventDefault();
  console.log("Submitted",product)

  // Create a  post produtc form
  const formData = new FormData();
  formData.append("imageFile",image)
  formData.append("product",
     new Blob([JSON.stringify(product)],  {type: "application/json"}))
             
     const username = 'abigail';
     const password = 'abi@1234';
     const token = btoa(`${username}:${password}`); 

   const postProducts = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/products/add',
        formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Basic ${token}`
          }
        }
      );
      setProduct(response.data);

      setProduct({
    name:"",
    description:"",
    price:"",
    releaseDate:"",
    stockQuantity:"",
    image :""
  })

    } catch (error) {
      console.error(error);
    }
  };
  postProducts();

  
  
}

     
    return(

        <>
         
        <div className="add-product-main-container">
          <h2>Add Product</h2>
                    <div className="add-product">
                    <form action=""  onSubmit={submitForm}>
                           <div className="product-name">
                            <input 
                            name='name'
                            id='name'
                            type="text" 
                            placeholder=" Product  name " 
                            value={product.name}
                            onChange={handleChange}
                            />
                            </div> 

                            <div className="product-name-description">
                               <input name="description"
                               type="text"
                                id="description" 
                                placeholder=" 
                                Product  Description "
                                value={product.description}
                                onChange={handleChange}

                                 />
                            </div>
                            
                                <div className="price-stockQuantity-wrapper">
                                    <div className="product-price">
                                    <input 
                                    name='price'
                                    id='price'
                                    type="number" 
                                     placeholder="Price"
                                      value={product.price}
                                      onChange={handleChange}
                                     
                                     />
                                    </div>
                                    <div className="product-stockQuantity">
                                    <input 
                                    type="number" 
                                    name="stockQuantity" 
                                    placeholder='stockQuantity'
                                    value={product.stockQuantity}
                                    onChange={handleChange}
                                    />
                                    </div>
                                </div>

                                <div className="date-image-wrapper">
                                    <div className="releasedDate">
                                    <input type="date"
                                     name="releaseDate"
                                      id="releaseDate"
                                       placeholder='releaseDate' 
                                       value={product.releaseDate}
                                       onChange={handleChange}
                                       
                                       />
                                    </div>

                                    <div className="product-image">
                                    <input type="file" 
                                    name="imageFile" 
                                    id=""
                                    onChange={handleImageChange} />
                                    
                                    </div>
                                </div>
                            <button type='submit'>Add Product</button>
                          </form>

                        </div>
        </div>
        
        </>
    );
 }