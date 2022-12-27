import React, {useState, useEffect} from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {

  const [menu, setMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  function toggleNav() {
      setMenu(!menu)
  }

  useEffect(()=> {
      function changeWidth() {
          setScreenWidth(window.innerWidth)
      }
      window.addEventListener('resize', changeWidth)
      return() => {
          window.removeEventListener('resize', changeWidth)
      }
  }, [])

  let showOptions = (screenWidth > 500 ?
          <div className='items' id="options"><Link to="/Services" style={{ textDecoration: 'none'}}><h1>Services Offered</h1></Link>
            <div className='dropdown-menu'>
              <li className='optionsItems'><p>Preconstruction Surveys</p></li>
              <li className='optionsItems'><p>Vibration Monitoring</p></li>
              <li className='optionsItems'><p>Optical Monitoring</p></li>
              <li className='optionsItems'><p>Crack Monitoring</p></li>
              <li className='optionsItems'><p>Special Inspections</p></li>
            </div>
          </div>
      :
      <div id="smallMenu">
        <h1>Yes</h1>
      </div>
      )

return (
  <div id="wholenav">
      <Link to="/" style={{ textDecoration: 'none'}}><h1 id="siteName">Safeguard</h1></Link>
  <nav>
      {(menu || screenWidth > 500 ) && (
      <ul className="list">
        <li className="items"><Link to="/" style={{ textDecoration: 'none'}}><p className='navLinks'>Home</p></Link></li>
        {showOptions}
        <li className="items"><Link to="/Coverage" style={{ textDecoration: 'none'}}><p className='navLinks'>Service Areas</p></Link></li>
        <li className="items"><Link to="/About" style={{ textDecoration: 'none'}}><p className='navLinks'>About Us</p></Link></li>
        <li className="items"><Link to="/Projects" style={{ textDecoration: 'none'}}><p className='navLinks'>Projects</p></Link></li>
        <li className="items"><Link to="/GetInTouch" style={{ textDecoration: 'none'}}><p className='navLinks'>Contact Us</p></Link></li>
      </ul>
      )}
  {/* <img onClick={toggleNav} className='btn' src={require('./pics/hamburger1.png')} alt="pic" /> */}
  </nav>
  </div>
  )
}

export default Navbar