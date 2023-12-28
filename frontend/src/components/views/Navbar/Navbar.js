import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import Logo from "../../../assets/images/logo1.png";

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className="nav-left">
        <img src={Logo} alt="Error" className='nav-logo'/>AnOpenSource
      </div>
      <div className="nav-center">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/security">Security</Link></li>
        </ul>
      </div>
      <div className="nav-right">
        <button className='nav-signup-btn'>Sign Up</button>
        <button className='nav-login-btn'>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
