import React from 'react';
import '../css/YouTube.css'

const YouTube = ({link}) => {
    return (
        <iframe
            className = "YTContainer"
            style={{
                border: "0",
                marginTop: "1em",
                boxShadow: '-moz-initial',
                WebkitBoxShadow: '5px 6px 50px grey'
            }}
            width = "100%"
            src = {link}
            allowFullScreen={true}
        >
        </iframe>
    );
};

export default YouTube;