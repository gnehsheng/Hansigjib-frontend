import Logo from '../data/HANSIGJIB-LOGO-LANDSCAPE.png'
import { Link } from 'react-router-dom'

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md"

import '../style/navbar.css'
import { useState } from 'react';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Logo} alt='logo' />

      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans"><Link to="/menu">Menu</Link></li>
        <li className="p__opensans"><Link to="/account">Account</Link></li>
      </ul>

      <div className="app__navbar-login">
        <Link to='/login' className="p__opensans">Sign Up / Login</Link>
        <div />
        <Link to='/cart' className="p__opensans">Cart</Link>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><Link to="/">Home</Link></li>
              <li className="p__opensans"><Link to="/menu">Menu</Link></li>
              <li className="p__opensans"><Link to="/account">Account</Link></li>
            </ul>
          </div>
        )}

      </div>
    </nav >

  );
}