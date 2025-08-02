import React from 'react'
import  './Navbar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

function Navbar({setShowLogin}) {

    const [menu, setMenu] = useState("menu");
    const {getTotalCartAmount} = useContext(StoreContext);

    return (
    <div className='navbar'>
       <Link to='/'><img src="src\assets\logo.png" alt="ddnlogo" className='logo' width={"100px"}  /></Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>setMenu("home")} className={`${menu==="home"?"active":""}`}>Home</Link>
            <a href='#plant'><li>Plants</li></a>
            <a href='#seeds'><li>Seeds</li></a>
            <a href='#pots&planters'><li>Pots & Planters</li></a>
            <a href='#plantcare'><li>Plant Care</li></a>
            <a href='#contact'><li>Contact</li></a>
        </ul>
        <div className="navbar-right">
            <img src="src\assets\searchicon.png" alt="search icon" width={"20px"} />
            <Link to='/cart' className="navbar-search-icon">
                <img src="src\assets\shopping-bag.png" alt="shopping-bag" width={"20px"} />
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </Link>
            <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
