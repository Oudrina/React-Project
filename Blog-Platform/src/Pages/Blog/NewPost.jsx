import React, { useEffect, useState } from 'react'
import './NewPost.css'
import axios from 'axios'
import { useAuth } from '../../Hooks/UseAuth'

function NewPost() {
 const[categories,setCategories] = useState([])
 const[tags,setTags] = useState([])

    const [valids, setValids] = useState(true)
    const [title,setTitle] = useState('')
     const [content,setContent] = useState('')
     const [categoryId,setCategoryId] = useState('')
    const [tagIds,setTagIds] = useState([])
    const [status,setStatus] = useState('')
    const{token} = useAuth()


    console.log({title,content,categoryId,tagIds,status})

     function handleSubmit(e){
         e.preventDefault()
         postBlogData()
        }

          const postBlogData = async ()=>{
            const newPost = ({title,content,categoryId,tagIds,status})
        try {
              const response = await axios.post('http://localhost:8080/api/v1/posts',newPost,{headers:{
                'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
              }
              })
          console.log(response.data)
          setTitle('')
            setContent('') 
             setCategoryId('')
               setTagIds('')
        } catch (error) {
          console.error("network error",error)
        }

      }
   

   useEffect(()=>{
       const getCategories = async ()=>{
        try {
              const response = await axios.get('http://localhost:8080/api/v1/categories')
          console.log(response.data)
         setCategories(response.data)
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
          console.log(response.data)
          setTags(response.data)
        } catch (error) {
          console.error("network error",error)
        }

      }
   
      getTags()
     },[])
  return (
    <div
    className='Main-wrapper'>
        
        NewPost
        <div className="form-div-wrapper">
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="input">
                    <label>Title: </label>
                <input type="text" name='title' placeholder='Blog title' required 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                onMouseDown={()=>setValids(false)}
                />
                 {title.length >0 && valids && <p>Enter a title</p> }
                </div>
                  <div className="content">
                    
                  <textarea name="content" id="" cols={5} rows={10} required 
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
                        <option value="status">Select a Status</option>
                       <option value='DRAFTS' >DRAFTS</option>
                         <option value="PUBLISHED">PUBLISHED</option>


                     </select>
                   </div>

                   <div className="submiy-form">
                    <button>Submit</button>
                   </div>
            </form>
        </div>
        </div>
  )
}

export default NewPost