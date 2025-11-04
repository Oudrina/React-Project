import React from 'react'
import Data from '../../data'
import EventCard from '../../components/eventCard/EventCard'
import './eventPage.css'

const EventPages = () => {

  return (

     <div className="app__eventpage__main__content">
      
        <div className="events__event__category__section">
  

     <div className="event__eventCards__container">
        {Data.map((event)=>(
                  <EventCard key={event.id} 
                  title={event.title}
                  image={event.image}
                  location={event.location}
                  category={event.category}
                  date={event.date}
                  />
        ))}
     </div>
      
        </div>
        

        <div className="events__category__section">  
           <div className="app__eventPage__search__category">
            <input type="text" placeholder='Search events' />
            </div>

          <div className='events__categories'>
            <p>Music</p>
             <p>Technology</p>
            <p>Party</p>
            <p>Seminar</p>
            <p>Music</p>
            <p>Wedding</p>

          </div>
        
        </div>
      </div>
 
  )
}

export default EventPages