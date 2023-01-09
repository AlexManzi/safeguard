import React from 'react'
import './ServiceAreas.css';

function ServiceAreas() {
  return (
    <div id="servicesTopPage">
        <div id="servicesMain">
            <div id="servicesTop">
                <h2 id="coverageHeading">Areas We Serve</h2>
            </div>
            <div id="servicesBottom">
                <h3 id="colHeading">To date, we have worked in a variety of states including:</h3>
                <ul id="topCol">
                    <div id="col1">
                    <li>Alabama</li>
                    <li>Arkansas</li>
                    <li>Connecticut</li>
                    <li>Maryland</li>
                    </div>
                    <div id="col2">
                    <li>Massachussetts</li>
                    <li>Mississippi</li>
                    <li>New Jersey</li>
                    <li>New York</li>
                    </div>
                    <div id="col3">
                    <li>Pennsylvania</li>
                    <li>Rhode Island</li>
                    <li>Tennessee</li>
                    <li>Virginia</li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ServiceAreas