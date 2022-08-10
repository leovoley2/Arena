import React from 'react'
import './Mapa.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Mapa = () => {
  return (
    <>
    <div className="programa-header" style={{gap: '2rem'}}>
    <span className='stroke' >Nuestra</span>
    <span >Ubicación</span>
  </div>
    <MapContainer center={[-12.155227500712245, -77.02621606023138]} zoom={15} scrollWheelZoom={false}>
     
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[-12.161568361361747, -77.02685963631669]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  </>
  )
}

export default Mapa