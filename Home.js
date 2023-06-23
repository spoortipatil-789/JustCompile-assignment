import React from 'react'
import Style from "./Home.css"


export const Home = () => {
  return (
    <div className='maincontainer'>
      <div className='firstSubContainer'>
        <p>Add My Note</p>
        <div className='details'>
        <input type="text" placeholder='Type message here...'></input>
        <button type='submit'>Save </button>
        </div>
      </div>
      <div className='secondSubContainer'>
      <p>All Notes</p>
        <div className='underline'></div>
        <div className='detailcontainer'>
          <div className='conatiner first'>Go to College</div>
          
          <div className='conatiner second'>Buy new book</div>
          <div className='conatiner third'>Need some help on IT  project</div>
        </div>
         
       
      </div>
    </div>
  )
}
