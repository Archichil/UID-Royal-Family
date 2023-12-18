import React from 'react';
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import YouTube from '../components/YouTube';
import {Chrono} from "react-chrono";
import {
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
} from '@mui/material';
import GallerySlider from "../components/GallerySlider";
import GoogleMaps from "../components/GoogleMaps";
import GoogleMap from "../components/PersonalPage/GoogleMap";
import PhotoGallery from "../components/PersonalPage/PhotoGallery";
import Timeline from "../components/PersonalPage/Timeline";
import Info from "../components/PersonalPage/Info";

const FamilyMemberInfo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth', });
    const id = useParams().id;
    const {t} = useTranslation();
    const familyMember = t(`familyMembers.${id}`, {returnObjects: true});
    return (
        <div>
            <Container>
                <Typography variant="h1" align="center" sx={{ my: 4 }}>
                    {familyMember['name']}
                </Typography>
                <Grid container spacing={4}>
                    <Info familyMember={familyMember}/>
                    <Timeline familyMember={familyMember}/>
                    <PhotoGallery familyMember={familyMember}/>
                    <YouTube familyMember={familyMember}/>
                    <GoogleMap familyMember={familyMember}/>
                </Grid>
            </Container>
        </div>
    );
};

export default FamilyMemberInfo;