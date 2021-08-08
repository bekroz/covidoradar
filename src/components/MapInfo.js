import React from 'react'
import Image from '../images/covidmap.jpeg';
import "../styles/MapInfo.css";

function MapInfo() {
    return (
        <div className="mapInfo">
            <h1>Cases MAP ==> Not ready yet</h1>
            <img src={Image} />
        </div>
    )
}

export default MapInfo;