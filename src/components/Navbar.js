import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function q() {
  return (
    <div id="wholebar">
      <div id="leftside">
        <Link to="/" className='linkFormat'><h1>Safeguard</h1></Link>
      </div>
      <div id="rightside">
        <Link to="/ServiceAreas" className='linkFormat'><h1>Service Areas</h1></Link>
        <Link to="/Projects" className='linkFormat'><h1>Projects</h1></Link>
        <a href="/#ServicesWeOffer"><h1>Services Offered</h1></a>
        <Link to="/ContactUs" className='linkFormat'><h1>Contact Us</h1></Link>
        <Link to="/AboutUs" className='linkFormat'><h1>About Us</h1></Link>
      </div>
    </div>
  )
}

export default q