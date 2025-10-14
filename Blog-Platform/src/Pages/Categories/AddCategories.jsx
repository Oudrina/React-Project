import axios from 'axios'
import React, { useState } from 'react'

function AddCategories({closeCategory}) {
    const[name,setName] = useState('')
    const[valid,setValid] = useState(false)
    console.log(name)
    const handleForm = (e )=>{
     e.preventDefault()
     submitForm()
    }

    const submitForm = async()=>{
        const formData = name
       try {
        const response = await axios.post('http://localhost:8080/api/v1/categories', formData,{headers:{'Content-Type':'application/json'}})
         console.log(response.data)
          setName('')
         if(response.status === 201)
            alert('Sucessfully added category')
       } catch (error) {
         console.error(error)
       }
       window.location.reload()
    }
  return (
    <div>
         <div className="modal" >
        <div className="add-tags">
            <div className="header">
                <h3>Categories</h3>
                <div className="close-btn"  onClick={()=>closeCategory(false)}>
                    <i class='bx bx-x'></i>
                </div>
            </div>

      <div className="form-table">
        <form  onSubmit={handleForm}> 
            <input type="text" placeholder='Add Categories' name='name'
            value={name}
            onChange={(e) =>setName(e.target.value)}
            onMouseDown={()=>setValid(true)}
             />
             {name.length === 0&& valid&&<span>Enter a category</span>} 
           
            <div className='onclick-tags'>
                <button>Add Categories</button>
            </div>
        </form>
    </div>

        </div>


           
    </div>
  
     </div>
  )
}

export default AddCategories