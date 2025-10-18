
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Component/Header'
import Categories from './Pages/Categories/Categories'
import Login from './Pages/Login/login'
import Tags from './Pages/Tags/Tags'
import { useState } from 'react'
import AddTags from './Pages/Tags/AddTags'
import AddCategories from './Pages/Categories/AddCategories'
import { AuthProvider } from './Context/AuthContext'
import BlogPosts from './Pages/Blog/BlogPosts'

function App() {
      const[addModal,setAddModal] = useState(false)
      const [showLogin,setShowLogin] = useState(false)
      const[addCateModel,setAddCateModal] = useState(false)


  
  return (
    < AuthProvider>
     <Header show={setShowLogin}  />
        { addModal&&<AddTags   setAddModal={setAddModal}/>}
         {addCateModel && <AddCategories closeCategory={setAddCateModal}/>  }
                {showLogin ? <Login  showClose={setShowLogin}/> : null} 


        <Routes>
          <Route path={"/"} 
          element={
         
             <BlogPosts />
            }/>

           <Route path={"/categories"} 
           element={
          
            <Categories  showCategory={setAddCateModal} />
        
            }/>

            <Route path={"/tags"}
             element={
           
            <Tags  setAddModal={setAddModal}/>
         
            }
            />
               
       </Routes>
    </AuthProvider>

 
  )
}

export default App
