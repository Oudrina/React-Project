import { Link } from 'react-router'
import Category from './Category'
import './Categories.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../Hooks/UseAuth'


function Categories({showCategory}) {
  const[categories,setCategories] = useState([])
  const {isAuthenticated} = useAuth()

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
  
 
  return (
    < div   className='category-wrapper'>
      <div className="main-wrapper">
       <h3>Categories</h3>


       {isAuthenticated &&
        <div className="add-category">
       <button onClick={()=>showCategory(true)}>
        add Categories
       </button>
      </div>
  
       }

      

      </div>

            <div className='category-wrapper-main'>

              <table>
                <tr>
                 <th>Category</th>   
                 <th>PostCount</th>          
                <th>Action</th>
                </tr>

                  {categories.length >0 ?(
                categories.map((cate)=>{
                  return(
                  <Category key={cate.id}  category={cate}/>
                  )
                })
          ):(
          <div> No Category available</div>)}  
                          
       
                 </table>
           

             
          </div>
          
            

          
          
            


          

               

           

    </div>
  )
}
export default Categories
