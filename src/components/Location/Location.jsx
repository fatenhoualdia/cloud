import React from 'react'
import GoogleMapReact from 'google-map-react'
import './location.css'
import { location } from '../../App'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
const Location = () => {
    const LocationPin = ({ text }) => (
        <div className="pin">
          <Icon icon={locationIcon} className="pin-icon" />
          <p className="pin-text">{text}</p>
        </div>
      )
  return (
    <div className='mp'>
<div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCM7RwpV_SP3vfZbblSUQlrkRlYI9SQRmY' }}
        defaultCenter={location}
        defaultZoom={2}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
    </div>
  )
}

export default Location