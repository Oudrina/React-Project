import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function AddTask() {
    const[task,setTask] =useState('')
    const[validation,setValidation]=useState(false)
 console.log(task)

 const  handleTask =  (e) => {
      e.preventDefault()
      addTaskForm()
      window.location.reload()
 }

 const addTaskForm = async()=>{
    const taskData= {task}
    try { 
        const response = await axios.post('http://localhost:8080/task/create',taskData,{headers:{
        'Content-Type':'application/json',
        Authorization:`Bearer ${localStorage.getItem("token")}`

    }})

    console.log(response.data)
    setTask('')
        
    } catch (error) {
         console.error(error)
    }
   
 }

  return (
    <>
    <div  className='task-search-main'>
        <div className='task-search'>
       <input type="text" 
       name='task'
         placeholder='Add task to the board'
         value={task}
         onChange={(e) =>setTask(e.target.value)}
         onMouseDown={()=>setValidation(true)}
         />
        
        <div>
            <button onClick={handleTask}>
                add
            </button>
             </div>
         
        </div>
        {task.length === 0 && validation &&<span>Add task to taskboard</span>
}

    </div>
    </>
  )
}


export default AddTask
