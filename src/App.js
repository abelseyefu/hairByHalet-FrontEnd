import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Nav from './components /Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import userServices from './userServices';
import Contact from './pages/Contact';
import Services from "./pages/Services"
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import tokenService from './Token/tokenService';




function App() {

const [user, setUser] = useState(userServices.getUser())
const [hairstyles, setHairstyles] = useState([])

const handleSignUp=()=>{
 setUser(userServices.getUser())
}

const handleLogin=()=>{
  setUser(userServices.getUser())
}

const handleLogout=()=>{
  userServices.logOut()
  setUser(null)
} 

useEffect(()=>{
  fetch("http://localhost:3020/hairstyle")
    .then((response)=> response.json())
    // .then( data => console.log(data))
    .then( items => setHairstyles(items))
   
}
,[])

  
  return (
    <div className='main' >

      <div> <Nav user={user} handleLogout={handleLogout} /> </div>
    
  <BrowserRouter>

    
      
      <Routes>

      <Route path="/home" element={ <Home/>} />
      <Route path="/services" element = {<Services hairstyles={hairstyles} /> } />
      <Route path= "/contact" element = {<Contact />} />
      <Route path = "/signUp" element = {<SignUp handleSignUp={handleSignUp}/>}  />
      <Route path = "/logIn" element = {<LogIn handleLogin = {handleLogin}/>} />
      <Route path= "/appointments" element = {<Appointment hairstyles={hairstyles}/>}/>

      </Routes>

   

  </BrowserRouter>

      
    </div>
  );
}

export default App;
