import React from 'react';
import {Grid, Typography} from "@mui/material";
import GoogleMaps from "../GoogleMaps";
import {useTranslation} from "react-i18next";

const GoogleMap = ({ familyMember }) => {
    const {t} = useTranslation();
    return (
        <Grid item xs={12} style={{marginTop: "70px"}}>
            <Typography variant="h2" align="center" sx={{mb: 2}}>
                {t('googleMap')}
            </Typography>
            <GoogleMaps
                link={familyMember['googleMap']}
            />
        </Grid>
    );
};

export default GoogleMap;