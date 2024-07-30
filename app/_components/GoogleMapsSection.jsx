import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MarkerItem from './MarkerItem';

const containerStyle = {
    width: '100%',
    height: '80vh',
    borderRadius: '8px'
};



function GoogleMapsSection({ coordinates, listing }) {



    const [center, setCenter] = useState({
        lat: -3.745,
        lng: -38.523,

    })


    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        if (window.google && listing.length > 0) {
            const bounds = new window.google.maps.LatLngBounds();
            listing.forEach(item => bounds.extend(item.coordinates));
            map.fitBounds(bounds);
            setMap(map);
        }
    }, [listing]);


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
            {console.log(listing)}
            {listing.map((item, index) => (

                <MarkerItem
                    key={index}
                    item={item}

                />

            ))
            }


        </GoogleMap >
    ) : (
        <div>Loading...</div>
    )
}

export default GoogleMapsSection;
