import React from 'react';
import {Grid, Typography} from "@mui/material";
import GoogleMapWidget from "../UI/GoogleMapWidget";
import {useTranslation} from "react-i18next";

const GoogleMap = ({ familyMember }) => {
    const {t} = useTranslation();
    return (
        <Grid item xs={12} style={{marginTop: "70px"}}>
            <Typography variant="h2" align="center" sx={{mb: 2}}>
                {t('googleMap')}
            </Typography>
            <GoogleMapWidget
                link={familyMember['googleMap']}
            />
        </Grid>
    );
};

export default GoogleMap;