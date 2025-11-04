import React from 'react'
import './events.css'
import EventCard from '../../components/eventCard/EventCard'
import  Data  from '../../data.js'
import SubHeading from './SubHeading.jsx'
const Events = () => {

  return (
    <div className='app__event__conatiner' id='event'>
       <SubHeading />
       
      <div className="event__eventCards__container">
        {Data.map((event)=>(
                  <EventCard  key={event.id} 
                  title={event.title}
                  image={event.image}
                  location={event.location}
                  category={event.category}
                  date={event.date}
                  />
        ))}
     </div>
      

        </div>
  )
}

export default Events