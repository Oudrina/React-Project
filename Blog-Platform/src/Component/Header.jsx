import React from 'react'
import { Link } from 'react-router'
import Login from '../Pages/Login/login'

 function Header({show}) {
  return (
    <>
        <div className='main-header'>
                <Link to={"/"}>
                <h5>Blog Platform</h5>
                </Link>
                <div className="profiles">
                    <Link to={"/"}>
                      <div className="Posts">
                        Post
                    </div>
                    </Link>
                  

                          <Link to={"/categories"}>
                          
                                <div className="Categories">
                                Categories               
                                </div>
                          </Link>

                           <Link to={"/tags"}>
                          
                                <div className="Tags">
                             Tags           
                                </div>
                          </Link>


                </div>
                  <Link to={"/login"}>
              <div className='login'>
                <button onClick={()=>show(true)}>
                    Login
                </button>
              </div>
              </Link>
               

               
            </div>

    </>
  )
}
export default Header
