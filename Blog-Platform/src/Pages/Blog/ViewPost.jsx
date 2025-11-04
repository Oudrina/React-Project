import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useAuth } from '../../Hooks/UseAuth'
 import './ViewPost.css'

function ViewPost() {
    const[postData,setPostData] = useState()
    const{token ,isAuthenticated} = useAuth()
    const navigate  = useNavigate()
   const{id} = useParams()
   console.log(id)
    const backToPost = ()=>{
        navigate("/")
    }

     const editPost = (id)=>{
        navigate("/edit/"+id)
    }
useEffect(()=>{
      const viewPostById=async()=>{
        const response = await axios.get(`http://localhost:8080/api/v1/posts/${id}`,
            {headers:{'Authorization':`Bearer ${token}`}})
        setPostData(response.data)
        console.log(response.data)
     }

    viewPostById()
},[id,token])
    
const handleDelete=async()=>{
  if(window.confirm("Do you want to delet this post")){
  const response  = await axios.delete('http://localhost:8080/api/v1/posts/'+id,  {headers:{'Authorization':`Bearer ${token}`}})
   console.log(response.status)
    
}
navigate("/")
window.location.reload()
}
  return (
    <div>
        {postData && 
         <div className="view-form-div-wrapper">
                <div className="header">
                    <button onClick={backToPost}>
                        back to post
                    </button>

                 {isAuthenticated &&
                    <div className="share-edit-delete">
                        <button onClick={()=>editPost(postData.id)}>Edit</button>
                         <button  onClick={handleDelete}>
                          Delete</button>
                           </div>
                   }
                   
                </div>
                <div className="input-form">
                   <h5 className='title'>{postData.title}</h5>
                   <div className="sub-title">
                  <p>{postData.author?.username}</p>
                 <p>{postData.createdAt}</p>
                   <p>{postData.readingTime} min read</p>
                   </div>
                 
                </div>

                  <div className="sub-content">
                    
                  <p>{postData.content}</p>
                   </div>

                   <div className="category-div">
                     <p className='cate'>{postData.category.name}</p>
                   </div>

                    <div className="Tags-div" required>
                        {postData.tags.map((tag)=>{
                         return (
                            <p>{tag.name}</p>
                         )
                        })}
                   </div>

                     <div className="status">
                       <p></p>
                   </div>

            
        </div>
        }
        

    </div>
  )
}

export default ViewPost