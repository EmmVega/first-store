import React, { useState, useEffect } from 'react'
import axios from 'axios';

const useGoogleAdress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDvYjYjRyvMRjjerwyWfGpz9sRQNLwnbC4`;

    useEffect(async () => {
        const response = await axios(API)
        setMap(response.data.results[0].geometry.location);
    }, []);
    return map;
};

export default useGoogleAdress;