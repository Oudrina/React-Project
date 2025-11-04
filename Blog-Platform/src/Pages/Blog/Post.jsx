import React from 'react'
import { Link, useNavigate } from 'react-router'

function Post({post}) {
        const navigate = useNavigate()

  const viewDetails=(id)=>{
  navigate("/post/" +id)
  }
  return (
    <div className='post-wrapper' onClick={()=>viewDetails(post.id)}>

      <div className="title-post">
        <h5>{post.title} </h5>
           <p>{post.author?.username}</p>
      </div>
       
      <div className="content"> 
      < p className='content-post'  >
      {post.content.slice(0,180)}...
      </p>
     </div> 

    <div className="sub-topic">
     
      <p className='post-date'>{post.createdAt}</p>
      <p className='reding-topic'>{post.readingTime} min read</p>
      <p className='category-tag'> {post.category.name}</p>
              {post.tags.map((tag)=>{
                return(
           <p className='tag'> {tag.name}</p>

                )
              })}
      


    </div>
    </div>
  )
}

export default Post