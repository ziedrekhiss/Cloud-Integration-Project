
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 34.725358517944876, 
  lng: 10.7224855,
};

export default function Map() {
   // eslint-disable-next-line no-undef
   const apiKey= import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
  return (
    <LoadScript
    googleMapsApiKey={apiKey}
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
    >
      <Marker
        position={{ lat: 37.7749, lng: -122.4194 }} 
      />
    </GoogleMap>
  </LoadScript>
  )
} 
