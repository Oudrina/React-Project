import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

  
const Timer = () => {
    const[time,setTime] = useState(0)
    const [running,setRunning] = useState(false)

    useEffect(()=>{
        let interval;
        if(running){
            interval = setInterval(()=>{
                setTime(previousTime=>previousTime + 10)
            }, 10);
        }
        return () => clearInterval(interval);
    },[running])
   

  return (
    <>
   
    <div className='title'> Stop-watch Timer</div>
    <span>{("0" + Math.floor((time/60000)% 60)).slice(-2)}:</span>
    <span>{("0" + Math.floor((time/1000)% 60)).slice(-2)}:</span>
    <span>{("0" + ((time/10)% 100)).slice(-2)}</span>
    <div>
        {running ? (
        <button onClick={()=>setRunning(false)}>stop</button>
        ):(
        <button onClick={()=>setRunning(true)}>Start</button>

        )}

        <button onClick={()=>setTime(0)}>reset</button>

    </div>
     </>
  )
}

export default Timer