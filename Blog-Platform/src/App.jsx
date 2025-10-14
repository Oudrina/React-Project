
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Component/Header'
import Categories from './Pages/Categories/Categories'
import Login from './Pages/Login/login'
import Tags from './Pages/Tags/Tags'
import Post from './Pages/Posts/Post'
import { useState } from 'react'
import AddTags from './Pages/Tags/AddTags'
import AddCategories from './Pages/Categories/AddCategories'

function App() {
      const[addModal,setAddModal] = useState(false)
      const [showLogin,setShowLogin] = useState(false)
      const[addCateModel,setAddCateModal] = useState(false)


  
  return (
    <>
     <Header show={setShowLogin}  />
        { addModal&&<AddTags   setAddModal={setAddModal}/>}
         {addCateModel && <AddCategories closeCategory={setAddCateModal}/>  }

        <Routes>

          <Route path={"/"} element={<Post />}/>

           <Route path={"/categories"} element={<Categories  showCategory={setAddCateModal} />}/>

            <Route path={"/tags"} element={<Tags  setAddModal={setAddModal}/>}/>

 <Route
   path={"/login"}
   element={showLogin ? <Login showClose={setShowLogin} /> : null}
 />
 
          
       </Routes>
    </>

 
  )
}

export default App
