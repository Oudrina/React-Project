import React from 'react'
 import 'boxicons'
 import axios from 'axios'
 import { useAuth } from '../../Hooks/UseAuth'
function Category({category }) {
 const{token} = useAuth()
  
  const handleDelete = async () => {  
    deleteCategoryByName()
  }
  const deleteCategoryByName = async ()=>{
   try {
    if(window.confirm("Do you want to delete this category")){
     const reponse = await axios.delete(`http://localhost:8080/api/v1/categories/${category.id}`,{headers:{
        'Authorization' : `Bearer ${token}`
     }})
     reponse.data
    }

   } catch (error) {
     console.error("network Erro", error)
   }
   window.location.reload()
  }

  return (
    <>
        <tr>
                    <td>{category.name}</td>
                    <td>{category.postCount}</td>
                    <td>
                        <div className='remove-button'>
                            <button onClick={()=>handleDelete()}>
                            <i className='bx bx-trash'></i>
                            </button>
                        </div></td>
        </tr>

          
        
    </>
  )
}


export default Category

