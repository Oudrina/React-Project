import React from 'react'

function Post() {
  return (
    <div className='post-wrapper'>

      <div className="title-post">
        <h4>Spaghetti:A love Letter </h4>
           <p>by System Adminstrator</p>
      </div>
       
      <div className="content"> 
      <a href='' className='content-post'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat a reiciendis nobis quae odit, enim rerum, et eius hic qui odio vitae dignissimos quia ab minus facere quasi nostrum error!.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nam atque sapiente consectetur impedit sit dicta dolor enim quaerat, facilis maiores id natus culpa sed ipsam deleniti eum non accusantium.
      </a>
     </div> 

    <div className="sub-topic">
     
      <p className='post-date'>December 25,2025</p>
      <p className='reding-topic'> 2 min read</p>
      <p className='category-tag'> Technology</p>
      <p className='tag'> Food</p>


    </div>
    </div>
  )
}

export default Post