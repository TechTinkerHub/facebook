import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

function Offers() {
  return (
    <div className='offers'>
         <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY FOR BEAST SELLERS PROUDUCT</p>
            <button>Check now</button>
         </div>
         <div className="offer-right">
           <img src={exclusive_image} alt="" />
         </div>
    </div>
  )
}

export default Offers