import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (selectedMenu) => {
    setMenu(selectedMenu);
    setActiveMenu(selectedMenu);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=" " />
        <p>SHOPHUB</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => handleMenuClick("shop")}><Link style={{ textDecoration: 'none' }} to='/'>
          Shop{activeMenu === "shop" ? <hr /> : <></>}</Link>
        </li>
        <li onClick={() => handleMenuClick("Men")}><Link style={{ textDecoration: 'none' }} to='/Men'>
          Men{activeMenu === "Men" ? <hr /> : <></>}</Link>
        </li>
        <li onClick={() => handleMenuClick("womens")}><Link style={{ textDecoration: 'none' }} to='/Womens'>
          Women{activeMenu === "womens" ? <hr /> : <></>}</Link>
        </li>
        <li onClick={() => handleMenuClick("Kids")}><Link style={{ textDecoration: 'none' }} to='/Kids'>
          Kids{activeMenu === "Kids" ? <hr /> : <></>}</Link>
        </li>
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token') ? <button onClick={() => {
          localStorage.removeItem('auth-token'); window.location.replace('/')
        }}>LogOut</button> : <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>}
        <Link style={{ textDecoration: 'none' }} to='/cart'><img src={cart_icon} alt=" " /> </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar 
