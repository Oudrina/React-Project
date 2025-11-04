import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import './ViewPost.css'
import axios, { Axios } from 'axios'
import { useAuth } from '../../Hooks/UseAuth'

function EditPost() {
       const{id} = useParams()
 const {token} = useAuth()
 const navigate = useNavigate()
   const [title,setTitle] = useState('')
      const [content,setContent] = useState('')
      const[categories,setCategories] = useState([])
         const[tags,setTags] = useState([])
      const [categoryId,setCategoryId] = useState('')
     const [tagIds,setTagIds] = useState([])
     const [status,setStatus] = useState('')
 console.log(id)

 useEffect(()=>{
      const viewPostById=async()=>{
        const response = await axios.get(`http://localhost:8080/api/v1/posts/${id}`,
            {headers:{'Authorization':`Bearer ${token}`}})
        console.log(response.data)
      setTitle(response.data.title)
      setContent(response.data.content)
      setCategoryId(response.data.category.name)
      setTagIds(response.data.tagIds)
      setStatus(response.data.status)

    }
                


    viewPostById()
},[id,token])

   useEffect(()=>{
       const getCategories = async ()=>{
        try {
              const response = await axios.get('http://localhost:8080/api/v1/categories')
          console.log(response.data)
         setCategories(response.data)
         console.log(response.data )
        } catch (error) {
          console.error("network error",error)
        }

      }
   
      getCategories()
     },[])
  


     useEffect(()=>{
       const getTags = async ()=>{
        try {
              const response = await axios.get('http://localhost:8080/api/v1/tags')
          console.log("Tags",response.data)
          setTags(response.data)
        } catch (error) {
          console.error("network error",error)
        }

      }
   
      getTags()
     },[])
   
      function editFormSubmit(e){
          e.preventDefault()
           
          const submitEdiForm = async()=>{
            const editFormData=({title,content,categoryId,tagIds,status})
            const response = await axios.put(`http://localhost:8080/api/v1/posts/${id}`,editFormData,{headers:{'Authorization':`Bearer ${token}`}})
            console.log(response.data)
        }
          submitEdiForm()
          navigate("/")
      }
  return (
   
        <div className="form-div-wrapper-main">
            <div className='post-edit'>
                <p>Edit Post</p>
            </div>
            <form action="" method="post" onSubmit={editFormSubmit} >
                <div className="input">
                    <label>Title: </label>
                <input type="text" name='title' placeholder='Blog title' required 
                value={title}
                 onChange={(e)=>setTitle(e.target.value)}
                />
                </div>
                  <div className="content">
                     
                         <textarea name="content" id="" rows={4} cols={20} required 
                     value={content}
                 onChange={(e)=>setContent(e.target.value)}
                  />
                    
                 
                   </div>

                   <div className="category">
                       <select name="categoryId" 
                      required 
                      value={categoryId} 
                     onChange={(e)=>setCategoryId(e.target.value)}>

                        <option value="">Select a Category</option>
                        {categories.length >0  &&(
                            categories.map((cate)=>{
                            return(
                           <option value={cate.id} key={cate.id}>{cate.name}</option>
                            )
                            })
                           )}
                     </select>
                   </div>

                    <div className="Tags" required>
                    <select name="tagIds" 
                     value={tagIds} 
                            onChange={(e) => {
                             setTagIds(Array.from(e.target.selectedOptions, option => option.value))

                                }}                    
                                 multiple
                     >
                        <option value="">Select Tags</option>
                          {tags.length >0  &&(
                         tags.map((tag)=>{
                            return(
                           <option value={tag.id}key={tag.id}>{tag.name}</option>
                            )
                            })
                           )}
                     </select>
                   </div>

                     <div className="status">
                     <select name="status"  required 
                      value={status}
                     onChange={(e)=>setStatus(e.target.value)}
                     > 
                        <option value="">Select a Status</option>
                       <option value='DRAFTS' >DRAFTS</option>
                         <option value="PUBLISHED">PUBLISHED</option>


                     </select>
                   </div>

                   <div className="submiy-form">
                    <button>Submit</button>
                   </div>
            </form>
        </div>

  )
}

export default EditPost