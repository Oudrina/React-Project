import React from 'react'
import { useNavigate } from 'react-router'

function DraftPost({draft}) {
   const navigate = useNavigate()
   const viewDetails=(id)=>{
       navigate("/post/"+id)
   }
  return (
    <div>
        <div className='post-wrapper' onClick={()=>viewDetails(draft.id)}>

      <div className="title-post">
        <h4> {draft.title}</h4>
           <p>{draft.author?.username}</p>
      </div>
       
      <div className="content"> 
      <a href='' className='content-post'> 
         {draft.content}
      </a>
     </div> 

    <div className="sub-topic">
     
      <p className='post-date'>{draft.createdAt}</p>
      <p className='reding-topic'>ReadingTime {draft.readingTime}min</p>
      <p className='category-tag'> {draft.category.name}</p>

      <p className='tag'>{draft.tags.map(tag=>tag.name).join(' , ')}</p>
      


    </div>
    </div>
    </div>
  )
}

export default DraftPost