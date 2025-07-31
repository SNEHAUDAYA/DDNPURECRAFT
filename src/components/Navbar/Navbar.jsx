import React from 'react'
import  './Navbar.css'

function Navbar() {

    return (
    <div className='navbar'>
        <img src="src\assets\logo.png" alt="ddnlogo" className='logo' width={"100px"}  />
        <ul className="navbar-menu">
            <li>Home</li>
            <li>Plants</li>
            <li>Seeds</li>
            <li>Pots & Planters</li>
            <li>Plant Care</li>
            <li>Contact</li>
        </ul>
        <div className="navbar-right">
            <img src="src\assets\searchicon.png" alt="search icon" width={"20px"} />
            <div className="navbar-search-icon">
                <img src="src\assets\shopping-bag.png" alt="shopping-bag" width={"20px"} />
                <div className="dot"></div>
            </div>
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
