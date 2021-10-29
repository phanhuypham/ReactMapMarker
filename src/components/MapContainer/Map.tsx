import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GoogleMap, LoadScript , MarkerClusterer, Marker} from '@react-google-maps/api';
import { Location } from '../../interfaces';
import { RootState } from '../../store';

const containerStyle = {
  width: '100%',
  height: '100%'
};



const initLocations = [
  { lat: -31.56391, lng: 147.154312, label : 'service', name: 'peter' },
  { lat: -33.718234, lng: 150.363181, label : 'service', name: 'strange' },
  { lat: -33.727111, lng: 150.371124, label : 'service', name: 'tony' },
  { lat: -33.848588, lng: 151.209834, label : 'service', name: 'steve' },
  { lat: -33.851702, lng: 151.216968, label : 'service', name: 'carter' },
  { lat: -34.671264, lng: 150.863657, label : 'service', name: 'bruce' },
  { lat: -35.304724, lng: 148.662905, label : 'service', name: 'quill' },
  { lat: -36.817685, lng: 175.699196, label : 'service', name: 'clint' },
  { lat: -36.828611, lng: 175.790222, label : 'service', name: 'ken' },
  { lat: -37.75, lng: 145.116667, label : 'service', name: 'luke' },
  { lat: -37.759859, lng: 145.128708, label : 'showroom', name: 'steven'},
  { lat: -37.765015, lng: 145.133858, label : 'showroom', name: 'martha' },
  { lat: -37.770104, lng: 145.143299, label : 'showroom', name: 'tom' },
  { lat: -37.7737, lng: 145.145187, label : 'showroom', name: 'jack' },
  { lat: -37.774785, lng: 145.137978, label: 'repair', name: 'bill' },
  { lat: -37.819616, lng: 144.968119, label: 'repair', name: 'frank' },
  { lat: -38.330766, lng: 144.695692, label: 'repair', name: 'steven' },
  { lat: -39.927193, lng: 175.053218, label: 'repair', name: 'andy' },
  { lat: -41.330162, lng: 174.865694, label: 'repair', name: 'chris'},
  { lat: -42.734358, lng: 147.439506, label: 'repair', name: 'ken'},
  { lat: -42.734358, lng: 147.501315, label: 'repair', name: 'alex'},
  { lat: -42.735258, lng: 147.438, label: 'repair', name: 'sebastian'},
  { lat: -43.999792, lng: 170.463352, label: 'repair', name: 'clara' },
]

// const options = {
//   imagePath:
//     'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m5.png',
// }

function createKey(location: Location) {
  return location.lat + location.lng
}

interface MapType {
  center: Location
}

const Map: React.FC<MapType> = ({center}) => {
  const [locations, setLocations] = useState(initLocations);
  const [currentLocation, setCurrentLocation] = useState(center);
  const map = useSelector((state: RootState) => state.map)
  
  useEffect(() => {
    const filteredLocation = initLocations.filter((location) => {
      return location.name.includes(map.name) &&
      map.labels.some((label: string) => location.label === label)
    });
    setLocations(filteredLocation)
  }, [map])

  useEffect(() => {
    setCurrentLocation(center);
  }, [center])

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDcwGyRxRbcNGWOFQVT87A1mkxEOfm8t0w"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation}
        zoom={4}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <MarkerClusterer
          imagePath='https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m5.png'
        >
          {(clusterer) =>
            locations.map((location) => (
              <Marker key={createKey(location)} position={location} clusterer={clusterer} />
            ))
          }
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map