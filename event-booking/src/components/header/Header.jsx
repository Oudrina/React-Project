import React from 'react'
import './header.css'
import header from '../../assets/header.jpg'
const Header = () => {
  return (
    <div className='app__header__container'>
        <img src={header} alt="header images" />

        <div className="app__header__heading" id='home'>
            <h1>Events Booking</h1>
            <div className='app__header__info__wrapper'>
            <p className=' app__header__info'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, officia sunt quisquam, labore quia voluptatum harum illum beatae, esse dolor maiores sed enim accusantium. Repellendus, incidunt! Possimus rerum dolor reprehenderit!</p>

            </div>

            <div className="app__header__button" id='event'>
                <button>Explore More</button>
            </div>
        </div>
        </div>
  )
}

export default Header