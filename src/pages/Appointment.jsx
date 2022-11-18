import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'



const Appointment = ({hairstyles}) => {
console.log(hairstyles)

const [appointmentFormData, setAppointmentFormData] = React.useState()

const handleChange = (e) => {
    setAppointmentFormData({...appointmentFormData, [e.target.id] : e.target.value })
}

const navigate = useNavigate()

const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3020/appointment/new', appointmentFormData)
    .then(res =>{
        console.log(res)
    })
    .then()
}


return (
<div>
    {hairstyles.map(hairstyle =>{
        return( 

<form onSubmit={handleSubmit}>

<div class="form-group">
    <label for="">Name</label>
    <input type="text" class="form-control" id="name" onChange={handleChange} />
</div>
  
<div class="form-group">
    <label for="">Date</label>
    <input type="date" class="form-control" id="appointmentDate" onChange={handleChange} />
</div>
  
<div class="form-group">
    <label for="">Time</label>
    <input type="time" class="form-control" id="appointmentTime"onChange={handleChange}/>
</div>
<div>
    <label>Pick a Hairstyle</label>
    <select id="HairStyle" onChange={handleChange}>
        <option value = {hairstyle._id}>{hairstyle.Name}</option>
        <option value = {hairstyle._id}>{hairstyle.Name}</option>
        <option value = {hairstyle._id}>Large Knotless</option>
        <option value = {hairstyle._id}>Medium Knotless</option>
        <option value = {hairstyle._id}>Medium Large Knotless</option>
        <option value = {hairstyle._id}>Small Medium Knotless</option>
        <option value = {hairstyle._id}>Four Stich Braids</option>
        <option value = {hairstyle._id}>Eight Stich Braids</option>
        <option value = {hairstyle._id}>Ten Stich Braids</option>
    </select>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
)
})}
    
</div>  
  )
}

export default Appointment