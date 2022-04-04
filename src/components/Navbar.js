import { Link } from "react-router-dom";
import Logo from '../data/HANSIGJIB-LOGO-LANDSCAPE.png'

export default function Navbar() {
  return (
    <header>
      <img src={Logo} alt='header logo'/>
        <ul>
          <li /><Link to="/">Home</Link>
          <li /><Link to="/menu">Menu</Link>
          <li /><Link to="/account">Account</Link>
          <li /><Link to="/login">Sign Up / Login</Link>
          <li className="cart"/><Link to="/cart">Cart</Link>
        </ul>
      
    </header>

  );
}