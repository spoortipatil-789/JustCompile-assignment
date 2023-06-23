import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./Welcomepage.css"


export const Welcome = () => {
  return (
    <div>
    <div className='container'>
    <div className='FirstContainer'>
      
    </div>
    <div className='SecondContainer'>
        <div className='content'>
            <div className='firstcontent'>
            </div>
            <div className='secondcontent'>
            </div>
        </div>
        <div className='button'>
        <p>Welcome</p>
        <div className='buttondetail'>
         {/* <button type='button'>Register</button>
         <button type='button'>Login</button> */}
         <Link to="/register">Register</Link>
         <Link to="/login">Login </Link>
        </div>
       
        </div>
     
    </div>
  </div>
  </div>
  )
}
