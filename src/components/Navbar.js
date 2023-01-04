import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function q() {

  let showServices =
    <div className='items' id="socials"><a href="#ServicesWeOffer" className='linkFormat'><h1>Services Offered</h1></a>
      <div className='dropdown-menu'>
        <li><a className='socialItems' href="#PreSurvey"><h4>Preconstruction Survey</h4></a></li>
        <li><a className='socialItems'><h4>Vibration Monitoring</h4></a></li>
        <li><a className='socialItems'><h4>Optical Monitoring</h4></a></li>
        <li><a className='socialItems'><h4>Crack Monitoring</h4></a></li>
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