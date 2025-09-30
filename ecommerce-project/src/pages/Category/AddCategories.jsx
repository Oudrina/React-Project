import axios from "axios";
import { useState } from "react"

function AddCategories(){
    const [category , setCategory] = useState() 

    const username = 'abigail';
     const password = 'abi@1234';
     const token = btoa(`${username}:${password}`); 

        function handleChange(e){
        const {name:value}= e.target;
        setCategory({...category ,[name]:value})
      }
     

    //   const formData = new FormData();
    //   formData.append("category")

     function postCategory(e){
        e.preventDefault()

         const  addCategory=  async ()=>{
          try {
            
            const response = await axios.post('http://localhost:8080/categories/add',{
            headers:{
                   "Content-Type": "application/json",
                 "Authorization": `Basic ${token}`
                 }
            
         })
         setCategory(response.data)
         console.log(response.data)
        //  setCategory({name:''})
        } 
        catch (error) {
             console.error("Unscessfull post request " , error)
        }
     }
            
      addCategory()    

    }

    return(
        <>
          <form action="" method="post" className="form-caontainer" onSubmit={postCategory}>

               <input 
               type="text"
               name="name"
               value={category.name}
               onChange={handleChange}

               
               />

               <button type="submit">Add</button>
          </form>
        
        </>
    )
}

export default AddCategories