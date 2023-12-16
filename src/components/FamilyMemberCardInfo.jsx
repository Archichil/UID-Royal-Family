import React from 'react';
import Stack from "@mui/material/Stack";
import '../css/FamilyMemberCardInfo.css';
import {useHistory} from "react-router-dom";

const FamilyMemberCardInfo = (props) => {
    const router = useHistory();
    return (
        <Stack
            direction="column"
            className="sideStack"
            width={props.width}
            height={props.height}
            style={{ cursor: 'pointer' }}
            onClick={() => router.push(`/family_members/${props.id}`)}
        >
            <img src={props.src} alt={props.name} className='familyCardImg' />
            <p className='memberNameText'>{props.name}</p>
        </Stack>
    );
};

export default FamilyMemberCardInfo;