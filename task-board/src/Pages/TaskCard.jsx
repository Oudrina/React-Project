import React from 'react'
import axios from 'axios'

function TaskCard({task}) {
 
  const handleDelete = async (id)=> {
    if(window.confirm("Do you want to delete this task")){
      try {
        const response = await axios.delete('http://localhost:8080/task/'+ id,{headers:{
         Authorization:`Bearer ${localStorage.getItem("token")}`

        }})
      console.log(response.data)
      } catch (error) {
          console.error(error)
      }
    }
  //  window.location.reload()
    
  }
  return (
    <>
    <div className='task-card ' >
      <span>{task.task} </span>
       
        <div>
            <button type='submit' className='deleteButton' onClick={()=>handleDelete(task.id)}>
                Delete
            </button>
        </div>
        </div>
      
        </>
  )
}

export default TaskCard