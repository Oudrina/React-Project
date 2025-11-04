import React, { useEffect, useState } from 'react'
import Blogheader from './Blogheader'
import Post from './Post'
import axios  from 'axios'

const BlogPosts = () => {
  const [posts,setPosts] = useState([])

  console.log( "Title is",posts.title)

  useEffect(()=>{
     const fetchPosts = async()=>{
    try {
        const response = await  axios.get('http://localhost:8080/api/v1/posts')
     setPosts(response.data)
     console.log(response.data)
    } catch (error) {
       console.error("Network Error",error)
    }
   
  }

    fetchPosts()
  },[])

 
  return (
    <div>
        <Blogheader />
        
         {posts.length>0 ? (posts.map((post)=>{
          return(
           <Post  key={post.id} post={post}/>
          )
         }))
         :(<div>Posts not available</div>)}
       
      
    </div>
  )
}

export default BlogPosts