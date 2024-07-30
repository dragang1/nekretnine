import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '80vh',
    borderRadius: '8px'
};



function GoogleMapsSection({ coordinates }) {


    const [center, setCenter] = useState({
        lat: -3.745,
        lng: -38.523

    })


    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        if (window.google) {
            const bounds = new window.google.maps.LatLngBounds(center);
            map.fitBounds(bounds);
            setMap(map)
        }
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    useEffect(() => {
        coordinates && setCenter(coordinates)
    }, [coordinates])


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : (
        <div>Loading...</div>
    )
}

export default GoogleMapsSection;
