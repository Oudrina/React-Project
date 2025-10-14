import { useState } from 'react'
import './Tags.css'
import 'boxicons'
import axios from 'axios'
function AddTags({setAddModal}) {
  const[names,setNames] = useState([])
   console.log({names})
   const handleInput =(e)=>{
     e.preventDefault()
     submitForm()
   }

    const submitForm = async()=>{
        const formData = [names]
       try {
        const response = await axios.post('http://localhost:8080/api/v1/categories', formData,{headers:{'Content-Type':'application/json'}})
         console.log(response.data)
          setNames('')
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
                <h3>Tags</h3>
                <div className="close-btn" onClick={()=>setAddModal(false)}>
                    <i class='bx bx-x'></i>
                </div>
            </div>

            <div className="form-table">
        <form  onSubmit={handleInput}> 
            <input type="text" placeholder='Add Tags' />
           <div>
            <span className='tags-span'>Tags</span>
           </div>
            <div className='onclick-tags'>
                <button>add Tags</button>
            </div>
        </form>
    </div>
        </div>


           
    </div>
  
</div>

    
  )
}



export default AddTags
