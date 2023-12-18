import React from 'react';
import '../../css/GoogleMaps.css'

const GoogleMapWidget = ({link}) => {
    return (
        <iframe
            className = "MapContainer"
            style={{
                marginTop: "1em",
                border: '0',
                boxShadow: '-moz-initial',
                WebkitBoxShadow: '5px 6px 50px grey'
            }}
            width= "100%"
            src = {link}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
    );
};

export default GoogleMapWidget;