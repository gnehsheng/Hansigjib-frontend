import Logo from '../data/HANSIGJIB-LOGO-LANDSCAPE.png'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md"
import '../style/navbar.css'
import { useState } from 'react';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const { setAuth } = useAuth();

  //clearcookies
  const handleLogOut = () => {
    document.cookie = "user="
    setToggleMenu(false)
    setAuth(document.cookie)
  }

  const navigate = useNavigate();
	const routeChange = () => {
		let path = `/`;
		navigate(path);
	}

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo" onClick={routeChange}>
        <img src={Logo} alt='logo' />

      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans"><Link to="/menu">Menu</Link></li>
        <li className="p__opensans"><Link to="/account">Account</Link></li>

      </ul>

      <div className="app__navbar-login">
        {document.cookie !== "user=" && document.cookie !== ""
          ? <Link onClick={handleLogOut} className="p__opensans" to="/login">Logout</Link>
          : <Link to='/login' className="p__opensans">Sign Up / Login</Link>}
        <div />
        <Link to='/cart' className="p__opensans">Cart</Link>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><Link to="/">Home</Link></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><Link to="/menu">Menu</Link></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><Link to="/account">Account</Link></li>
            </ul>
          </div>
        )}

      </div>
    </nav >

  );
}