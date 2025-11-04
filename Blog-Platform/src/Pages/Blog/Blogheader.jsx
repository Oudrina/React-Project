import React, { useEffect, useState } from 'react'
 import './Blog.css'
import { NavLink } from 'react-router'
import axios from 'axios'
function Blogheader() {
 const[categories,setCategories] = useState([])
   const[tags,setTags] = useState([])


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
                    {categories.length >0 &&   categories.map((category)=>{
                      return(
                      <p className='categories' key={category.id}>{
                          category.name 
                        }({category.postCount>0
                        ?
                        category.postCount
                      :
                     0
                      })</p> 

                      )
                    })}


                  </div>
                        
              
              </div>

               <div className="tags-main-wrapper">
                  {tags.length >0 && tags.map((tag)=>{
                      return(
                      <p className='tags' key={tag.id}>{
                          tag.name 
                        }({tag.postCounts})</p> 

                      )
                    })}
                
                 <p className="tags">Technology (0)  </p>

                 
                 

              </div> 
         </div>

      
     
      
       
    </div>
  )
}

export default Blogheader