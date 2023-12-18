import React from 'react';
import {Grid, Typography} from "@mui/material";
import GallerySlider from "../UI/GallerySlider";
import {useTranslation} from "react-i18next";

const PhotoGallery = ({ familyMember }) => {
    const {t} = useTranslation();
    return (
        <Grid item xs={12} style={{marginTop: "70px"}}>
            <Typography variant="h2" align="center" sx={{mb: 2}}>
                {t('photoGallery')}
            </Typography>
            <GallerySlider
                items={familyMember['images']}
            />
        </Grid>
    );
};

export default PhotoGallery;