import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

function EditAppointment(){
     const [patientName , setPatientName] = useState("")
    const [doctorName , setDoctorName] = useState("")
    const [reason , setReason] = useState("")
    const [appointmentDate , setAppointmentDate] = useState("")
    const [appointmentTime , setAppointmentTime] = useState("")
    const[validation ,setValidation] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id)

 useEffect(()=>{
            const getDetailsById = async () =>{
            const response = await axios.get('http://localhost:8082/appointment/' + id) 
           console.log(response.data)
               setPatientName(response.data.patientName)
                setDoctorName(response.data.doctorName)
                setReason(response.data.reason)
                setAppointmentDate(response.data.appointmentDate)
                setAppointmentTime(response.data.appointmentTime)      
            } 
      getDetailsById()
     },[id])


 function handleSubmit(e){
          e.preventDefault()
          const appointmentData  = { patientName, doctorName, reason, appointmentDate, appointmentTime};
          const editAppointment = async() =>{ 
            try {
              const response = await  axios.put('http://localhost:8082/editAppointment/'+ id ,appointmentData,{
                 
            })
                console.log(response.data)
                navigate("/")
               
            } catch (error) {
              console.error(error.message)
            }
          }
           editAppointment() 

      }
                

     


   

    return(
        <>
         <div className='form-wrapper'>
          <h3>Book an Appointment</h3>

          <form action="" method="post" onSubmit={handleSubmit}>

                  <div>
                    <label htmlFor="patientName">Patient Name: </label>
                      <input type="text" name="patientName" id="patientName" required
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
                   
                  
               
                <div className="button">
                    <button type="submit">Update</button>
                    <button type="button" onClick={()=>{navigate("/")}}>Back</button>
                </div>
              </form>
            </div>
        </>
    )
}
export default EditAppointment
