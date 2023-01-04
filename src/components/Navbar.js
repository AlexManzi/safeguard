import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

function q() {

  let showServices =
    <div className='items' id="socials"><HashLink to="/#ServicesWeOffer" className='linkFormat'><h1>Services Offered</h1></HashLink>
      <div className='dropdown-menu'>
        <li><HashLink to="/#PreSurvey" className='socialItems'><h4>Preconstruction Survey</h4></HashLink></li>
        <li><HashLink to="/#VibrationMonitoring" className='socialItems'><h4>Vibration Monitoring</h4></HashLink></li>
        <li><HashLink to="/#OpticalMonitoring" className='socialItems'><h4>Optical Monitoring</h4></HashLink></li>
        <li><HashLink to="/#CrackMonitoring" className='socialItems'><h4>Crack Monitoring</h4></HashLink></li>
      </div>

    </div>

  return (
    <div id="wholebar">
      <div id="leftside">
        <Link to="/" className='linkFormat'><h1>Safeguard</h1></Link>
      </div>
      <div id="rightside">
        <Link to="/ServiceAreas" className='linkFormat'><h1>Service Areas</h1></Link>
        <Link to="/Projects" className='linkFormat'><h1>Projects</h1></Link>
        {showServices}
        <Link to="/ContactUs" className='linkFormat'><h1>Contact Us</h1></Link>
        <Link to="/AboutUs" className='linkFormat'><h1>About Us</h1></Link>
      </div>
    </div>
  )
}

export default q