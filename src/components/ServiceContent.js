import React from 'react'
import './ServiceContent.css';

function ServiceContent({item}) {

    let displayLeft = 
    <div id="itemLeft">
        <div id="itemHeadingL">
            <h1>{item.serviceName}</h1>
        </div>
        <div id="contentParentLeft">
            <div id="itemTextL">
                <p>{item.text}</p>
            </div>
            <div id="itemPicture">
                <img className="previewPic" src={item.pic}/>
            </div>
        </div>
    </div>

    let displayRight = 
    <div id="itemRight">
        <div id="itemHeadingR">
            <h1>{item.serviceName}</h1>
        </div>
        <div id="contentParentRight">
            <div id="itemPicture">
                <img className="previewPic" src={item.pic}/>
            </div>
            <div id="itemTextR">
                <p>{item.text}</p>
            </div>
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