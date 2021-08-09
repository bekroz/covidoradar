import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "../styles/MapInfo.css";
import { showCircleDataOnMap } from '../util';

function MapInfo({ countries, casesType, center, zoom }) {
  return (
    <div className="mapInfo">
      <LeafletMap center={center} zoom={zoom} attributionControl={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showCircleDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default MapInfo;