import React from 'react';
import Carousel from "react-material-ui-carousel";
import {Box} from "@mui/material";
import '../css/GallerySlider.css'

const Item = (props) => {
    return (
        <Box
            sx = {{
                display: "flex",
                justifyContent: "center"
            }}
        >
            <img
                className = "Img"
                style = {{
                    boxShadow: '-moz-initial',
                    WebkitBoxShadow: '5px 6px 10px grey'
                }}
                src = {process.env.PUBLIC_URL + props.path}
                alt = {props.key}
            />
        </Box>
    )
}

const GallerySlider = ({items}) => {
    return (
        <Carousel
            autoPlay="true"
            navButtonsAlwaysVisible={false}
            sx ={{
                marginTop: '1em',
                width: "100%"
            }}
        >
            {items.map((item, key) =>(
                <Item path = {item} key = {key}/>
            ))}
        </Carousel>
    );
};

export default GallerySlider;