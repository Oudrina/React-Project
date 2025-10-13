
import './App.css'
import Header from './components/Header'
import AddTask from './Pages/AddTask'
import TaskBoard from './Pages/TaskBoard'
import Login from './Pages/Login'
import {Routes,Route} from 'react-router'
import Board from './Pages/Board'
import SignUp from './Pages/SignUp'

function App() {

  return (
    <>
      <Header />
     
     
     

     <Routes>
        
      <Route path={'/login'} element={<Login/> } />
       <Route path={'/signup'} element={<SignUp/> } />

     <Route path={'/'} element={<Board/> } />

     </Routes>
    
    </>
  )
}

export default App
