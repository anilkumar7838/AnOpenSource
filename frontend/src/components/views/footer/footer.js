import React from 'react'
import Logo from "../../../assets/images/logo1.png";
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-section1">
      <div className="footer-top">
        <img src={Logo} alt="Error" className='footer-logo'/>AnOpenSource
      </div>
      <div className="footer-bottom">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/security">Security</Link></li>
        </ul>
      </div>
      </div>
      <div className="footer-section2">
        <div className="footer-section2-mail">
          <EmailIcon/>
          <p>hello@skillbridge.com</p>
        </div>
        <div className="footer-section2-phone">
          <PhoneIcon/>
          <p>+91 91813 23 2309</p>
        </div>
        <div className="footer-section2-address">
          <LocationOnIcon/>
          <p>New Delhi</p>
        </div>
      </div>
      <div className="footer-section3">
        <div className="footer-section3-left">
          <FacebookIcon/>
          <TwitterIcon/>
          <LinkedInIcon/>
        </div>
        <div className="footer-section3-mid">
          <p>
            AnOpenSource All Rights Reserved
          </p>
        </div>
        <div className="footer-section3-right">
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>

    </div>
  )
}

export default Footer