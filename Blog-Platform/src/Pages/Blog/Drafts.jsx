import axios from 'axios'
import DraftPost from './DraftPost'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Hooks/UseAuth'


function Drafts() {
    const[drafts,setDrafts]= useState([])
    const{token} = useAuth()
    useEffect(()=>{
     const fetchPosts = async()=>{
    try {
        const response = await  axios.get('http://localhost:8080/api/v1/posts/drafts',{headers:{
            'Authorization': `Bearer ${token}`
        }})
     setDrafts(response.data)
     console.log(response.data)
    } catch (error) {
       console.error("Network Error",error)
    }
   
  }

    fetchPosts()
  },[token])
  return (
    <div>
        {drafts.length >0 && drafts.map((draft)=>{
         return(
       <DraftPost key={draft.id} draft={draft}/>

         )
        })}
    </div>
  )
}

export default Drafts
