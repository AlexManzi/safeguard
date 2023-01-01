import React from 'react'
import './ServiceCard.css';

function ServiceCard({service}) {
  return (
    <div id="CardTop">
        <div id="CardHeading">
            {service.serviceName}
        </div>
        <div id="CardImage">
            <img className="cardPic" src={service.pic}/>
        </div>
    </div>
  )
}

export default ServiceCard