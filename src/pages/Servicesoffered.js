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
        serviceName: "Vibration Monitoring",
        pic: "https://cdn3.iconfinder.com/data/icons/sound-waves-2/64/254_sound-wave-music-soundwave-vibration-beat-512.png"
    },
    {
        serviceName: "Optical Monitoring",
        pic: "https://static.thenounproject.com/png/1581173-200.png"
    },
    {
        serviceName: "Crack Monitoring",
        pic: "https://i.imgur.com/z497KUQ.png"
    
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
                <h1 id="grid-template-rows: 10vh;">Services Offered</h1>
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