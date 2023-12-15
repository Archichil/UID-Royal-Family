import React from 'react';
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import "../css/DecsriptionCardInfo.css"

const DescriptionCardInfo = (props) => {
    return (
        <Stack
            direction="column"
            className="sideStack"
            width={props.width}
            height={props.height}
        >
            <p className='mainText'> {props.title} </p>
            <Divider sx={{ width: '80%' }} color="black"/>
            <p className='sideText'>
                {props.info}
            </p>
        </Stack>
    );
};

export default DescriptionCardInfo;