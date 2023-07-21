import React, {useState} from 'react'
import {Marker, MapContainer, Popup, TileLayer} from 'react-leaflet';
import { Icon } from 'leaflet';
import parkData from './../data/skateboard-park.json'


export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});


const MapContainerBox = () => {

  const [activePark, setActivePark] = useState(null);

  return (
    <MapContainer center={[45.4, -75.7]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />


    {parkData.features.map((park )=>(
    <Marker
    key={park.properties.PARK_ID}
    position={[park.geometry.coordinates[1],park.geometry.coordinates[0]]} 
    onClick = {()=> setActivePark(park)}
    >
      <Popup>
      <div>
          <h2>{park.properties.NAME}</h2>
          <p>{park.properties.DESCRIPTIO}</p>
        </div>
      </Popup>
    </Marker>
    ))}

  </MapContainer>
  )
}

export default MapContainerBox