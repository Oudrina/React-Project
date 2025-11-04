import React from 'react'
import { Link, NavLink,} from 'react-router'
import { useAuth } from '../Hooks/UseAuth'


 function Header({show}) {
    const{logout ,isAuthenticated} = useAuth()
   
  return (
    <>
        <div className='main-header'>
                <Link to={"/"}>
                <h5>Blog Platform</h5>
                </Link>
                <div className="profiles">

                    <NavLink to={"/"} end>
                      <div className="Posts">
                       Home
                    </div>
                    </NavLink>
                  

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

                <div className="login-draft-post-wrapper">
                {isAuthenticated &&
                <div className="post-wrapper-auth">
                 <Link to={"/drafts"}>
                   <div className="draft-post">
                    Drafts
                   </div>
                   </Link>
                   
                     <Link to={"/newPost"}>
                       <div className="add-post">
                       New Posts
                     </div>
                     </Link>
                  
                </div>
               }

                {isAuthenticated?
                  (
                    <div className='login'>
                <button onClick={logout}>
                    Logout
                </button>
              </div>
                  )
                :(
                    
                  <Link to={"/login"}>
              <div className='login'>
                <button onClick={()=>show(true)}>
                    Login
                </button>

              </div>
            </Link>
                )}
               
               </div>

               
            </div>

    </>
  )
}
export default Header
