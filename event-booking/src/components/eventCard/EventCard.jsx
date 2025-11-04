import React from 'react'
import './eventCard.css'
const EventCard = ({title,location, image, category,date}) => {
    
  return (
    <div className='app__eventCard__container'>
        <img src={image} alt="Events " />
        <div className="app__eventCard__heading">

             <div className='app__eventCard__headng-category'>
                    <h4>{title}</h4>
                    <div className="eventCard__category">
                        <p>{category}</p>
                    </div>
                    
                </div>

            <div className="app__eventCard__info">
                <p className='eventCard__date'>{date}</p>
                <p>{location}</p>
               <p>200 out of 500 left</p>
            </div>
            <div className="eventCard-button">
                <button>
                    Book Now
                </button>
            </div>

        </div>
        </div>
  )
}

export default EventCard