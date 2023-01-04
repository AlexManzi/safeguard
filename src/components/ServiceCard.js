import React from 'react'
import './ServiceCard.css';

function ServiceCard({service}) {

  let serviceDiv = (service ? service.div : "")

  let linkPicture = 
  <a href={serviceDiv} id="linkDiv">
    <div id="CardTop">
        <div id="CardHeading">
            {service.serviceName}
        </div>
        <div id="CardImage">
          <img className="cardPic" src={service.pic}/>
        </div>
    </div>
  </a>

  return (
    <div>
    {linkPicture}
    </div>
  )
}

export default ServiceCard