import React from 'react'
import './footer.css'
import { MdArrowForward } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='app__footer__container' id='footer'>

       <div className="app__footer_div__space_between">

            <div className="app__footer__heading">
             <h3>Subscribe to our  newsletter</h3>
            </div>

                <div className="app__footer_input-search">
                    <input type="text"  placeholder='Enter your email Address'/>
                    <div className='app__footer_button'>
                        <button> 
                            <MdArrowForward />
                        </button>
                    </div>
                </div>
       </div>

       <div className="app__foooter_groupB">
        <div className="app__footer__links">
            <p>Useful Links</p>
            <ul>
                <li>
                    <a href="">About Event</a>
                    <a href="">Tickets</a>
                    <a href="">Location</a>
                     <a href="">Blog</a>
                    <a href="">Contact</a>


                </li>
            </ul>
        </div>

         <div className="app__footer__contact-us">
            <p>Contacts</p>
             <p>nore@replygmail.com</p>
            <p>+233-595-57-78</p>
           
        </div>

            <div className="app__footer__social-links">
                        <p> Our Social Platform</p>
                        <p>nore@replygmail.com</p>
                        <p>+233-595-57-78</p>
                    
                    </div>
       </div>
       <div className='app__footer__button-line' />
        
        </div>
  )
}

export default Footer