import React from 'react'
import './ServiceContent.css';

function ServiceContent({item}) {

    let displayLeft = 
    <div id="itemLeft">
        <div id="itemHeadingL">
            <h1>{item.serviceName}</h1>
        </div>
        <div id="itemTextL">
            <p>{item.text}</p>
        </div>
    </div>

    let displayRight = 
    <div id="itemRight">
        <div id="itemHeadingR">
            <h1>{item.serviceName}</h1>
        </div>
        <div id="itemTextR">
            <p>{item.text}</p>
        </div>
    </div>

    let display = (item.display === 'R' ? displayRight : displayLeft)

  return (
    <div id="item">
        {display}
    </div>
  )
}

export default ServiceContent