
import { Route, Routes } from 'react-router'
import './App.css'
import Appointments from './Pages/Appointments'
import CreateAppointement from './Pages/createAppointment'
import ViewAppointment from './Pages/viewAppointment'
import EditAppointment from './Pages/EditAppointment'

function App() {

  return (
    <>
   
        <Routes>
          <Route path='/' element={<Appointments />} />
          <Route path='/appointment' element={<CreateAppointement />}/>
           <Route path='/viewAppointment/:id' element={<ViewAppointment />} />   
           <Route path='/editAppointment/:id' element={<EditAppointment />}></Route>    
  </Routes>
   
   
   
    </>
  )
}

export default App
