import React from 'react'
import './Servicesoffered.css';
import ServiceCard from '../components/ServiceCard';

function Servicesoffered() {

    let servicesObject = [
    {
        serviceName: "Preconstruction Surveys",
        pic: "https://www.freeiconspng.com/thumbs/survey-icon/survey-icon-12.png"
    },
    {
        serviceName: "Vibration Monitoring"
    },
    {
        serviceName: "Optical Monitoring"
    },
    {
        serviceName: "Crack Monitoring"
    }
    ]


    let servicesMap = servicesObject.map(service => {
        return (
            <ServiceCard
            key={service.id}
            service={service}
            />
        )
    })

  return (
    <div id="ServicesWeOffer">
        <div id="ServicesListMain">
            <div id="ServicesTitle">
                <hr id="line"></hr>
                <h1 id="areaTitle">Services Offered</h1>
                <hr id="line"></hr>
            </div>
            <div id="ServicesList">
                {servicesMap}
            </div>

        </div>
    </div>
  )
}

export default Servicesoffered