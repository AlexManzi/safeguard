import React from 'react'
import './ServiceContent.css';

function ServiceContent({item}) {

    let getTextArray = (item ? item.text : "")
        
    let displayTextArray = getTextArray.split("@")

    console.log(displayTextArray[0])

    let getDiv = (item ? item.div : "")



    let displayLeft = 
    <div id="itemLeft">
        <div className="itemHeadingL" id={getDiv}>
            <h1>{item.serviceName}</h1>
        </div>
        <div id="contentParentLeft">
            <div id="itemTextL">
                <p>{displayTextArray[0]}</p>
                <p>{displayTextArray[1]}</p>
                <p>{displayTextArray[2]}</p>
            </div>
            <div id="itemPicture">
                <img className="previewPic" src={item.pic}/>
            </div>
        </div>
    </div>

    let displayRight = 
    <div id="itemRight">
        <div className="itemHeadingR" id={getDiv}>
            <h1>{item.serviceName}</h1>
        </div>
        <div id="contentParentRight">
            <div id="itemPicture">
                <img className="previewPic" src={item.pic}/>
            </div>
            <div id="itemTextR">
                <p>{displayTextArray[0]}</p>
                <p>{displayTextArray[1]}</p>
                <p>{displayTextArray[2]}</p>
                <p>{displayTextArray[3]}</p>
                <p>{displayTextArray[4]}</p>
                <p>{displayTextArray[5]}</p>
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