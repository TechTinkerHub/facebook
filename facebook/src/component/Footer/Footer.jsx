import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsaupp_icon from '../Assets/whatsapp_icon.png'


function Footer() {
  return (
    <div className='footer'>
     <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Shopper</p>
     </div>
     <ul className="footer-links">
        <li>company</li>
        <li>products</li>
        <li>offices</li>
        <li>about</li>
        <li>contact</li>
     </ul>
     <div className="footer-social-icons">
        <div className="footer-container">
             <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-container">
             <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-container">
             <img src={whatsaupp_icon} alt="" />
        </div>
     </div>
     <div className="footer-copyrite">
       <hr/>
       <p>Copyright @ 2024-All write reserved </p>
     </div>
    </div>
  )
}

export default Footer