import React from 'react'
import {BsInstagram, BsTelephone} from "react-icons/bs"
import {MdOutlineMail} from "react-icons/md"


const Home = () => {
  return (
    <div style={{
      backgroundImage: `url(${'https://i.imgur.com/rEYoQqM.jpg'})`,
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '750px',
    }}>
    <h1 style= {{
      color:'white',
      fontSize:"2rem",
      fontFamily: 'Playfair Display',
      textAlign: "center"
      
    }}> Welcome to Braids By Halet  </h1>

    <p style={{
      color:"white",
      fontSize:"20px",
      textAlign:"center",
      paddingTop: "50px"
    }}
    >Thank you for choosing HairByHalet. I am located at 447 North India Creek dr Clarkston, GA 30021. My hours of operation are Monday, Wednesday, and Saturday from 8AM - 5PM
    </p>

    <h3 style={{
        justifyContent:"space-between",
        display:"flex",
        padding: "80px"

      
    }}>
      {<BsInstagram style={{ paddingRight:"20px", color:"white", fontSize:"50px" }}/>} {< BsTelephone style={{ paddingRight:"20px", color:"white", fontSize:"50px" }}/>} {< MdOutlineMail style={{ paddingRight:"20px", color:"white", fontSize:"50px" }} />}

    </h3>

  


      
      
      
    
    
    </div>
  )
}

export default Home