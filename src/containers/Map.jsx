import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({data}) => {
const mapStyles = {
    height: "50vh",
    width: "100%"
}

const defaultCenter = {
    // lat:data.lat, lng:data.lng  
    lat:20.510896, lng:-97.441668
}

    return (
        <LoadScript googleMpasApiKey = 'AIzaSyDvYjYjRyvMRjjerwyWfGpz9sRQNLwnbC4'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={9}
                center={defaultCenter}
                >
                    <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;