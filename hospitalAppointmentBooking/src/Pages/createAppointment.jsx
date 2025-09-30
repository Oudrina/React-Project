 import { useState } from 'react'
 import axios from 'axios'
import './createAppointment.css'
import { useNavigate } from 'react-router'

function CreateAppointement(){
    const [patientName , setPatientName] = useState("")
    const [doctorName , setDoctorName] = useState("")
    const [reason , setReason] = useState("")
    const [appointmentDate , setAppointmentDate] = useState("")
    const [appointmentTime , setAppointmentTime] = useState("")
    const[validation ,setValidation] = useState(false)
    const navigate = useNavigate()

     
      function handleSubmit(e){
          e.preventDefault()

          const appointmentData  = { patientName, doctorName, reason, appointmentDate, appointmentTime};
          const createAppointment = async()=>{
            try {
              const response = await axios.post('http://localhost:8082/appointment', appointmentData,{
              headers:{
                'content-type':"application/json" 
              },
            })
                console.log(response.data)
                setPatientName("")
                setDoctorName("")
                setReason("")
                setAppointmentDate("")
                setAppointmentTime("")
                  navigate("/");
          
            } catch (error) {
              console.error(error.message)
            }
          }
            


          createAppointment();
      }
      return (
        <div className='form-wrapper'>
          <h3>Book an Appointment</h3>

          <form action="" method="post" onSubmit={handleSubmit}>

                  <div>
                    <label htmlFor="patientName">Patient Name: </label>
                      <input type="text" name="atientName" id="atientName" required
                    value={patientName}
                    onChange={(e)=>setPatientName(e.target.value)}
                    onMouseDown={()=>setValidation(true)}
                  />
                  {patientName.length ===0 && validation && 
                  <span className='err-validation'> Name required</span> 
                  } 
                  </div>
                
                    <div>
                      <label htmlFor="doctorName">Doctor Name: </label>
                      <input type="text" name="doctorName" id="doctorName" required
                      value={doctorName}
                      onChange={(e)=>setDoctorName(e.target.value)}
                      onMouseDown={()=>setValidation(true)}

                      />
                    {doctorName.length=== 0 && validation && 
                    <span className='err-validation'> Doctor's name required</span>}

                    </div>
                  
                      <div>
                        <label htmlFor="reason">Appointment Reason : </label>
                        <input type="text" name="reason" id="reason" required
                        value={reason}
                        onChange={(e)=>setReason(e.target.value)}
                        onMouseDown={()=>setValidation(true)}
                        />
                          {reason.length ===0 && validation && 
                          <span className='err-validation'> Appointment reason required</span>}
                        </div>
                    
                        <div>
                        <label htmlFor="appointmentDate">Appointment Date: </label>
                        <input type='date' name="appointmentDate" id="appointmentDate" required
                        value={appointmentDate}
                        onChange={(e)=>setAppointmentDate(e.target.value)}
                        onMouseDown={()=>setValidation(true)}
                      />
                        {appointmentDate.length===0 && validation && 
                        <span className='err-validation'> Appointment Date required</span>}
                        </div>
                  

                   <div>
                   <label htmlFor="appointmentTime">Apointment Time: </label>
                   <input type="time" name="appointmentTime" id="appointmentTime" required
                   value={appointmentTime}
                    onChange={(e)=>setAppointmentTime(e.target.value)}
                    onMouseDown={()=>setValidation(true)}

                   />
                      {appointmentTime.length === 0 && validation &&
                       <span className='err-validation'> Appointment Time required</span>}

                   </div>
                   
                  
                
                {/* <div className="button">
                    <button type="submit">Book</button> */}
                <div className="button">
                    <button type="submit">Book</button>
                    <button type="button" onClick={() => navigate("/")}>Back</button>
                </div>
              </form>
            </div>
           );


}
export default CreateAppointement