import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import Servicesoffered from './Servicesoffered';
import ServiceInfo from '../components/ServiceInfo';

function Home() {
  return (
    <div id="topHome">
        <div id="homeBubble">
            <div id="homeBlurb">
                <h2 id="heading">THE BEST POSSIBLE PROTECTION FOR CONTRACTORS AND PROPERTY OWNERS.</h2>
                <p id="frontText">We offer complete protection for any construction activity that produced vibration including excavations, rock blasting, pile driving, drilling, underpinning, and any other vibration producing activity.</p>
                <div id="buttonDiv">
                  <Link to="/ContactUs" id="contactLink"><button id="quote" className="homeContact">Get a Quote!</button></Link>
                  <button className="homeContact" id="callUs">Call Us!</button>
                </div>
            </div>
        </div>
        <Servicesoffered />
        <ServiceInfo />
    </div>
  )
}

export default Home