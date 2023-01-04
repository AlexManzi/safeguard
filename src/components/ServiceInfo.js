import React from 'react'
import './ServiceInfo.css';
import ServiceContent from './ServiceContent';

function ServiceInfo() {

    let infoToDisplay = [
        {
            serviceName: "Preconstruction Survey",
            display: "L",
            div: "PreSurvey",
            last: false,
            pic: "https://www.worldconstructiontoday.com/wp-content/uploads/2020/11/constructon-worker-wellfare.jpg",
            text: "Safeguard offers industry leading preconstruction surveys as required by law.  Our surveys offer the best protection in the industry for our clients.  Safeguard offers both photograph and video inspections, and will document the roe-existing conditions of any property with a fine tooth comb. @ This is a vital step in protecting our clients against unwarranted damage claims by property owners.  Surveys are affordable and well-worth it."
        },
        {
            serviceName: "Vibration Monitoring",
            display: "R",
            div: "VibrationMonitoring",
            last: false,
            pic: "https://acu-vib.com.au/wp-content/uploads/2018/08/sv258pro-399x400.png",
            text: "Safeguard uses top of the line NOMIS seismographs to meet all of your vibration monitoring needs.  At Safegurd, we offer both attended monitoring and wireless monitoring depending on the client needs and ensures compliance with all city, state, and federal government standards. @ Safeguard has experience setting up seismographs in a variety of different locations.  Inside, outside, on walls, underground.  Whatever you're needs are, Safeguard will have a way to meet them. @ Attended monitoring is having a technician on-site to take live measurements of the vibration levels on-site.  Attended monitoring is most commonly performed for blasting jobs or for work adjacent to highly protected sites. @ Wireless monitoring offers monitoring 24/7, without the need for an on-site technician.  With a wireless setup, Safeguard offers the most affordable monitoring available.  Wireless monitoring offers live feedback as vibration levels approach regulations and sends our refined daily reports so we can always know you're levels.  Even without a power source. Safeguard has reliable solar power setups for any and all needs. @ Safeguard also offers vibration monitoring plans, stamped by a P.E. when needed, at an affordable rate. @ Safeguard is able to work with clients to determine the best setup for their project.  Contact us (hyperlink to contact page) today for a free estimate."
        },
        {
            serviceName: "Optical Monitoring",
            display: "L",
            div: "OpticalMonitoring",
            last: false,
            pic: "https://www.lawyernc.com/wp-content/uploads/2020/09/construction.jpg",
            text: "Safeguard reliably tracks any and all vertical or horizontal movement for sites adjacent to ongoing construction work. Licensed surveyors install settlement monitoring points (SMP's) or deformation monitoring points (DMP's) on a variety of structures including but not limited to buildings, bridges, culverts, dams, and tunnels. @ Safeguard is extremely precise and will detect any movement from the initial fixed point.  Typically, points are checked on a weekly basis, but Safeguard offers the flexibility to meet the needs of all clients.  After checking the points, easily understandable reports are generated and shared with the client."
        },
        {
            serviceName: "Crack Monitoring",
            display: "R",
            div: "CrackMonitoring",
            last: true,
            pic: "https://i0.wp.com/solvepmproblems.com/wp-content/uploads/2021/06/What-Do-Building-Inspectors-Do-4-Construction-Inspector-Responsibilities.jpg?fit=300%2C240&ssl=1",
            text: "Safeguard offers crack monitoring to identify and shifts in preexisting damages that may have been caused by construction activities. @ The crack gauges protect clients from false claims by property owners about damage caused by construction activity. @ This is an extremely affordable option for clients and is a great protection during any construction activity."
        },
    ]

    let serviceMap = infoToDisplay.map(item => {
        return (
            <ServiceContent 
            key={item.id}
            item={item}
            />
        )
    })


  return (
    <div id="InfoTop">
        <div id="InfoList">
            {serviceMap}
        </div>
    </div>
  )
}

export default ServiceInfo