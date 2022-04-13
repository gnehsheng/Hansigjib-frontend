import Logo from '../data/HANSIGJIB-LOGO-LANDSCAPE.png'

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
        <li className="p__opensans"><a href="/">Home</a></li>
        <li className="p__opensans"><a href="/menu">Menu</a></li>
        <li className="p__opensans"><a href="/account">Account</a></li>
      </ul>

      <div className="app__navbar-login">
        <a href='/login' className="p__opensans">Sign Up / Login</a>
        <div />
        <a href='/cart' className="p__opensans">Cart</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="/">Home</a></li>
              <li className="p__opensans"><a href="/menu">Menu</a></li>
              <li className="p__opensans"><a href="/account">Account</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav >

  );
}