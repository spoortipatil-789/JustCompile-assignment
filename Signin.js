import React, { useState } from 'react'
import Style from "./Signin.css"
import axios from 'axios';
import { Link} from 'react-router-dom';

export const Signin = () => {
  
  const [username , setUsername] = useState();
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("")

  
const handleSubmit = (e)=>{
  e.preventDefault()
  axios.post('http://localhost:8000/userform',{username,email,password})
  .then(result => console.log(result))
  .catch(err => console.log(err))
}

  return (
    
   <div>
         <div className='container'>
      <div className='FirstContainer'>
        
      </div>
      <div className='SecondContainer'>
      <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username'></input>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'></input>
            <input type="number" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'></input>
            {/* <button type='submit'>SignUp</button> */}
         </form>
         <Link to="/login">login</Link>
      </div>
      
    </div>
    </div>
  )
}
