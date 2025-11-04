
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Component/Header'
import Categories from './Pages/Categories/Categories'
import Login from './Pages/Login/login'
import Tags from './Pages/Tags/Tags'
import AddTags from './Pages/Tags/AddTags'
import AddCategories from './Pages/Categories/AddCategories'
import { AuthProvider } from './Context/AuthContext'
import BlogPosts from './Pages/Blog/BlogPosts'
import NewPost from './Pages/Blog/NewPost'
import { useState } from 'react'
import Drafts from './Pages/Blog/Drafts'
import ViewPost from './Pages/Blog/ViewPost'
import EditPost from './Pages/Blog/EditPost'

function App() {
      const[addModal,setAddModal] = useState(false)
      const [showLogin,setShowLogin] = useState(false)
      const[addCateModel,setAddCateModal] = useState(false)
    
  return (
    < AuthProvider>
     <Header show={setShowLogin}  />
        { addModal&&<AddTags   setAddModal={setAddModal}/>}
         {addCateModel && <AddCategories closeCategory={setAddCateModal} />  }


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
             element={ <Tags  setAddModal={setAddModal}/>}
            />
            <Route path='/login' element={showLogin ? <Login  showClose={setShowLogin}/> : null} />
            <Route path='/newPost' element={<NewPost/>} />
             <Route path='/drafts' element={<Drafts />} />
             <Route path='/post/:id' element={<ViewPost/>} />
             <Route path='/edit/:id' element={<EditPost/>} />


               
       </Routes>
    </AuthProvider>

 
  )
}

export default App
