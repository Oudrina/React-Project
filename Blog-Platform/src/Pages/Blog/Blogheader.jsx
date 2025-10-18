import React from 'react'
 import './Blog.css'
import { NavLink } from 'react-router'
function Blogheader() {
  return (
    <div className='main-wrapper'>
        <div className="wrapper">
              <h4>Blog</h4>

              <div className="post-category-wrapper">
                <div className="header">
               <NavLink  to={"/"} className='post-all' end>
                  <p>All post</p>
                  </NavLink>
                </div>
                
                  
                  <div className="cate-sub-topic">
                       <p className='categories'>Categories (2)</p> 
                        <p className='categories'>Technology (2)
                          </p> 
                       <p className='categories'>Tavel (0)</p> 
                       <p className='categories'>Lifestyle (8)</p> 


                  </div>
                        
              
              </div>

               <div className="tags-main-wrapper">
                 <p className="tags">Technology (0)  </p>
                 <p className="tags">Technology (0)  </p>
                 <p className="tags">Technology (0)  </p>
                 <p className="tags">Technology (0)  </p>
                 <p className="tags">Technology (0)  </p>
                 <p className="tags">Technology (0)  </p>
                 <p className="tags">Technology (0)  </p>

                 
                 

              </div> 
         </div>

      
     
      
       
    </div>
  )
}

export default Blogheader