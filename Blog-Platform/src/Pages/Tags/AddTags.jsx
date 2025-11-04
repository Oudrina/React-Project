import { useState } from 'react'
import './Tags.css'
import 'boxicons'
import axios from 'axios'
import { useAuth } from '../../Hooks/UseAuth'
function AddTags({setAddModal}) {
  const[names,setNames] = useState('')
    const {token}=useAuth()
    // const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);
   console.log([names])
   const handleInput =(e)=>{
     e.preventDefault()
     submitForm()
   } 

  
 // When user presses Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newTag = names.trim();

      if (newTag === '' || tags.includes(newTag)) return;

      setTags([...tags, newTag]);
      setNames('');
      setTags([])
    }
  };

    const submitForm = async()=>{
        const formData = {names:tags}
       try {
        const response = await axios.post('http://localhost:8080/api/v1/tags', formData,{headers:{'Content-Type':'application/json','Authorization' :`Bearer ${token}`}})
         console.log(response.data)
          setNames('')
         if(response.status === 201)
            alert('Sucessfully added category')
       } catch (error) {
         console.error(error)
       }
      //  window.location.reload()
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
       
          <form onSubmit={handleInput}>
            <input
              type="text"
              placeholder="Add Tag"
              value={names}
              onChange={(e) => setNames(e.target.value)}
               onKeyDown={handleKeyDown}

            />

            {/* Tags List */}
        <div className="tags-list">
          {tags.map((tag,index)=>{
            return(
               <p className='tag-item' key={index}>{tag}</p> 

            )
          })}
           

        </div>
       
        

            <div className="onclick-tags">
              <button type="submit">Add Tag</button>
            </div>
          </form>
        </div>
    </div>
        </div>


           
    </div>
    
  )
}



export default AddTags
