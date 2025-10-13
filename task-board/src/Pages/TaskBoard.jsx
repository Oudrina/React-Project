import React from 'react'
import TaskCard from './TaskCard'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const TaskBoard = () => {
   const [tasks,setTasks]= useState([])
    useEffect(()=>{
         const fetechTask = async()=>{
        try {
            
           const response = await axios.get('http://localhost:8080/task',{headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
           }}) 
           console.log(response.data)
           setTasks(response.data)
        } catch (error) {
            console.error(error)
        }
        

    }
    fetechTask();
    },[])

   
  return (
    <>
    <div className='board-wrapper'>
         {tasks.length >0 ?(tasks.map((task)=>{
            return(
           <TaskCard key={task.id} task={task}/>

            )
         })):(
            <div>No task available</div>
         )}
       

     
        

        

        </div>
        </>
  )
}

export default TaskBoard