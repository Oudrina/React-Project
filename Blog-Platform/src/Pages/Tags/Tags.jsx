import React, { useEffect, useState } from 'react'
import Tag from './Tag'
import AddTags from './AddTags'
import axios from 'axios'

 function Tags({setAddModal}) {
   const[tags,setTags] = useState([])

     useEffect(()=>{
       const getCategories = async ()=>{
        try {
              const response = await axios.get('http://localhost:8080/api/v1/tags')
          console.log(response.data)
          setTags(response.data)
        } catch (error) {
          console.error("network error",error)
        }

      }
   
      getCategories()
     },[])
  return (
< div   className='category-wrapper'>
      <div className="main-wrapper">
       <h3>Tags</h3>
      <div className="add-category"> 
       <button onClick={()=>setAddModal(true)}>
        add tags
       </button>
      </div>
     
      </div>


            <div className='category-wrapper-main'>
             <table>
                <tr>
                 <th>Tags</th>   
                 <th>PostCount</th>          
                <th>Action</th>
                </tr>

                 {tags.length >0 ?(tags.map((item)=>{
                    return(
                       <Tag  key={item.id} tag ={item}/>
                    )

                 }))
                 :(
                    <div>No Tags Available</div>
                 )
                 
                 }
                 
              

                 </table>
          </div>

         
  

          
          
            


          

               

           

    </div>  )
}

export default Tags