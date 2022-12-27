import React from 'react'
import './Contactbar.css';

function Contactbar() {
  return (
    <div id="topbar">
        <div id="phoneNumber">
            <img className='contactpic' src={require('../pictures/phone.png')} alt="pic"/>
            <p id="phoneNumberShow">646-265-5108</p>
        </div>
        <div id="email">
            <img className='contactpic' src={require('../pictures/email.png')} alt="pic"/>
            <p id="emailShow">Thomas.Marrone@gmail.com</p>
        </div>
    </div>
  )
}

export default Contactbar