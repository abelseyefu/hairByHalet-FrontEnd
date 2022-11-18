import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import tokenService from '../Token/tokenService'
import userServices from '../userServices'

const SignUp = ({handleSignUp}) => {

const [formData, setFormData] = React.useState()

const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value})
}

const navigate = useNavigate()

const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      await userServices.signUp(formData)
      handleSignUp() //updates userState to tell the app component user has signed up
      navigate('/home')
    } catch(err){

    }

    // axios.post('http://localhost:3020/user/new', formData)
    // // .then(res => res.json())
    // .then(({token})=> {
    //   tokenService.setToken(token)
    // })
}







  return (

<div  >

  <form onSubmit={handleSubmit}>
    <div class="mb-3">
      <label for="Name" class="form-label"></label> Name
      <input type= "Name" class = "form-control" id= 'Name' onChange={handleChange}></input>

      <label for="PhoneNumber" class="form-label"></label> Phone Number
      <input type= "Phone Number" class = "form-control" id= 'PhoneNumber' onChange={handleChange} ></input>


      <label for="Email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" onChange={handleChange} />
    <div id="Email" class="form-text">We'll never share your email with anyone else.</div>
  
  </div>

  <div class="mb-3">
    <label for="Password" class="form-label">Password</label>
    <input type="Password" class="form-control" id="Password" onChange={handleChange}/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>


    </div>
  )
}

export default SignUp