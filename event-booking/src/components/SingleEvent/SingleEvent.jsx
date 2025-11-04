import React from 'react'
import './singleEvent.css'
import event01 from '../../assets/event01.jpg'

const SingleEvent = () => {
  return (
        <div className='app__singleevent__container'>

            <div className="app__singleevent__imagediv">
              <img src={event01} alt=" Event" />     
            </div>
            <div className="app__singleevent__information">
             <h3>DZIRE CHEST FREEZER SINGLE DOOR 142L SILVER CFSS-M151</h3>
             <p className='app__event__price'>$ 99 </p>
             <div className='app__event__description'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quos quaerat, eius beatae molestias molestiae explicabo distinctio repellat maiores dolorum excepturi, facere vero animi libero, tenetur impedit omnis. Amet, quo.</p>
             </div>
             <div className="app__singleevent__category">
             <p>Music</p>
             </div>
             <div className='app__event__button'>
              <button>Book Now</button>
             </div>
            </div>
        
        </div>
       
      
  )
}

export default SingleEvent