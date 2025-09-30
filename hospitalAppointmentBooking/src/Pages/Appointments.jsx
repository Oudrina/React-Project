 import { Link, useNavigate } from 'react-router'
 import axios from   'axios'
import './Appointments.css'
import { useEffect, useState } from 'react'
function Appointments(){
  const [appointments,setAppointments] =useState([])
  const navigate = useNavigate()
    
  const viewDetails = (id)=>{
   navigate("/viewAppointment/" + id)
  }

  const editAppointment= (id)=>{
   navigate("/editAppointment/" + id)
  }
  const deleteAppointment = (id) => {
    const appointmentDelete = async () => {
      if (window.confirm("Do you want to delete this data")) {
        const response = await axios.delete('http://localhost:8082/removeAppointment/' + id)
        console.log("Appointment deleted successfully",response.data )
      }
      window.location.reload()

    }
    appointmentDelete()
  }

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:8082/appointments')
        console.log(response.data)
        setAppointments(response.data)
      } catch (error) {
        console.error(error.message)
      }
    }
    getAppointments()
  }, [])
         
     
     


    return(
        <>
         <div>
                  <div className="main-wrapper">

                <div className="create-appointment">
                    <Link to={'appointment'} >
               <button className='appointments'>create Appointment</button>

                    </Link>
                </div>

                <div className="appointment-list">
                    <h4>Appointment Booking List</h4>
                </div>
             <table className='table-data'>
                <thead>

                    <tr>
                       <th>PatientName</th>
                        <th>DoctorName</th>
                        <th>Reason for Appointment</th>
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                         <th>Status</th>

                    </tr>
                </thead>
                    
                <tbody>
                   {appointments.length > 0 ? (
                     appointments.map((appoint) => (
                        <tr key={appoint.id}>
                          <td>{appoint.patientName}</td>
                          <td>{appoint.doctorName}</td>
                           <td>{appoint.reason}</td>
                          <td>{appoint.appointmentDate}</td>
                          <td>{appoint.appointmentTime}</td>
                          <td className='appointment-status'>
                            <button className='appointment-view' onClick={()=>viewDetails(appoint.id)}>view</button>
                            <button className='appointment-approved' onClick={()=>editAppointment(appoint.id)}>Edit</button>
                            <button className='appointment-rejected' onClick={()=>deleteAppointment(appoint.id)}>Remove</button>

                          </td>
                        </tr>
                      ))
                   ) : (
                    <tr>
                        <td colSpan="6" style={{ textAlign: 'center' }}>
                           No appointments yet
                        </td>
                        </tr>
                   )}
                 

                </tbody>

                

             </table>


            </div>



         </div>
        
        
        </>
    )
}

export default Appointments