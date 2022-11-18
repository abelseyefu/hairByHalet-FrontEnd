import React from 'react'
import { useEffect } from 'react'
import { json, Link } from 'react-router-dom'
import styled from 'styled-components'
import Appointment from './Appointment'



const HairStyleBox = styled.div`

    width: auto;
    margin: auto;
    display:inline-block;
    justify-content: center;
    padding: 12px;
    color: white;
   
   
`


const Services= ({hairstyles}) => {
  return (
  <div style={{backgroundImage: `url(${'https://i.imgur.com/rEYoQqM.jpg'})`,
  backgroundSize: "cover",
  
    
    
 }}>
 <div> 
    {console.log(hairstyles)}
      {hairstyles.map(hairstyle =>{
        return (
         
          <HairStyleBox>
            
              <h3>{hairstyle.Name}</h3>
              <img src={hairstyle.image} alt='img' width= "300" height="315"/>
            
          </HairStyleBox>
          
          )
        })}
      <div>

        <a style={{}}class= "btn btn-primary" href="/appointments" role="button">Book Now </a>
      </div>

     
       
        

        






    </div>







</div>

  )
}

export default Services