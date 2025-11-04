import React from 'react'
import Header from '../../components/header/Header'
import Events from '../../containers/Events/Events'

const Homepage = () => {
  return (
    <div className='app__homepage__container'>
         <Header />
        <Events />
       
        </div>
  )
}

export default Homepage