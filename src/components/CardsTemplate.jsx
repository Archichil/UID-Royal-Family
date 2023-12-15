import React from 'react';
import Stack from "@mui/material/Stack";
import "../css/CardsTemplate.css"

const CardsTemplate = (props) => {
    return (
        <Stack direction="row" className="mainStack">
            {props.children.map((child, index) => (
                <React.Fragment key={index}>
                    {child}
                </React.Fragment>
            ))}
        </Stack>
    );
};

export default CardsTemplate;