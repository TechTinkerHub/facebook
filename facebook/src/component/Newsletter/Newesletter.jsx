import React from 'react'
import './Newsletter.css'

function Newesletter() {
  return (
    <div className='newsletter'>
    <h1>Get Exclusiv offers from your email</h1>
    <p>subscribe to our newsletter and stay update</p>
    <div>
        <input type="email" placeholder='your email id' />
        <button>Subscribe</button>
    </div>
    </div>
  )
}

export default Newesletter