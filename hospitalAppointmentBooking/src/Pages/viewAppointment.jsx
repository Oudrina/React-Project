import { Link, useParams } from 'react-router'
import './viewAppointment.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
function ViewAppointment(){
  const {id} = useParams()
  const [studentData , setStudentData] = useState({})
    console.log(id)

     useEffect(()=>{
            const viewDetailsById = async () =>{
            const response = await axios.get('http://localhost:8082/appointment/' + id) 
           setStudentData(response.data)
            } 
      viewDetailsById()
     },[id])
   

    return(
        <>   
        <div className='form-wrapper'>
        <h4>Patient Details</h4>

             {studentData &&  <div>
                <p>  <strong>Patient Name</strong>: {studentData.patientName} </p>
                <p><strong>Reason for Appointment</strong>:  {studentData.reason} </p>
                <p><strong>Patients Doctor</strong>:  {studentData.doctorName} </p>
                <p> <strong>Appointment Time</strong>: {studentData.appointmentTime} </p>
               </div> 
                }
            <Link to="/" >
             <button type="submit">Back</button>
            </Link>
            
        </div>

        </>
    )
}
export default  ViewAppointment