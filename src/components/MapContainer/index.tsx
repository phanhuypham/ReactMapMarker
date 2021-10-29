import React, { useState } from 'react'
import styled from 'styled-components'
import { Location } from '../../interfaces'
import Map from './Map'
import Search from './Search'

const MapContainer = styled.div`
  width: 60%;
`

const SearchContainer = styled.div`
  width: 40%;
  padding: 20px;
  background-color: rgb(230, 230, 230);
`

const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  height: 400px;
`

const initCenter: Location = {
  lat: -28.024,
  lng: 140.887,
  label : 'center',
  name: 'center' 
};

const Container: React.FC = () => {
  const [center, setCenter] = useState<Location>(initCenter)

  const showCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            label : 'center',
            name: 'center' 
          })       
        }
      )
    } 
  }
  return (
    <div>
      <div className="header">
        <h1>Find a dealer near you.</h1>
      </div>
      <Wrapper>
        <SearchContainer>
          <Search showCurrentLocation={showCurrentLocation}/>
        </SearchContainer>
        <MapContainer >
          <Map center={center}/>
        </MapContainer>
      </Wrapper>
    </div>
  )
}

export default Container