import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer' id='footer'>
     <div className="footer-content">
        <div className="footer-content-left">
            <img src="src/assets/logo.png" alt="logo" />
            <p>100% Naturally Sourced Products</p>
            <div className="footer-social-icons">
                <img src="src\assets\facebook_icon.png" alt="fb icon" />
                <img src="src\assets\linkedin_icon.png" alt="Ln icon" />
            </div>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>Call: +91 69953 47734</li>
                <li>contact@ddnpurecraft.com</li>
            </ul>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
     </div>
     <hr />
     <p className='footer-copyright'>Copyright 2025 © ddnpurecraft.com - All Right Reserved </p>
    </div>
  )
}

export default Footer