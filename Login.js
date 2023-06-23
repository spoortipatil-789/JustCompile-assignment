import React, { useState } from 'react'
import { Header } from './Header'
import Style from "./Login.css"
import {Link, Navigate} from "react-router-dom"
import axios from "axios"

export const Login = () => {

  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000/login',{email,password})
    .then(result => {
      console.log(result)
      if(result.data === "Success"){
        Navigate("/home")
      }
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
    <div className='container'>
      <div className='FirstContainer'>
        
      </div>
      <div className='SecondContainer'>
         <form onSubmit={handleSubmit}> 
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'></input>
            <input type="number" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'></input>
            {/* <button type='submit' onClick={submit}>Login</button> */}
         </form>
         <Link to="/login">Login</Link>
      </div>
    </div>
    </div>
  )
}
