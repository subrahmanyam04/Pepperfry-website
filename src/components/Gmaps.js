import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from "react-google-maps";

const Gmaps = (props) => {
    const { isLoaded } = props;
    const containerStyle = {
        width: "50vw",
        height: "50vh"
    };
    const center = {
        lat: 16.86656835027758,
        lng: 81.92750983824212
    };

    return (

        isLoaded && (
            <>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} ></GoogleMap>

                <Marker position={center} />
            </>

        )
    )
}

export default Gmaps;