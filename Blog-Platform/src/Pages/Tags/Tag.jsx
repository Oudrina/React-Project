import React from 'react'
import 'boxicons'
import '../Categories/Categories.css'
export default function Tag({tag}) {
  return (
   
        <tr>
                    <td>{tag.name}</td>
                    <td>{tag.postCounts}</td>
                    <td>
                        <div className='remove-button-tag'>
                            <button >
                            <i className='bx bx-trash'></i>
                            </button>
                        </div></td>
        </tr>
    
    
  



  
  )
}
