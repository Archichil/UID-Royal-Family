import React from 'react';
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
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
import GoogleMap from "../components/personal page/GoogleMap";
import PhotoGallery from "../components/personal page/PhotoGallery";
import Timeline from "../components/personal page/Timeline";
import Info from "../components/personal page/Info";
import TubeYou from '../components/personal page/TubeYou';

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
                    <TubeYou familyMember={familyMember}/>
                    <GoogleMap familyMember={familyMember}/>
                </Grid>
            </Container>
        </div>
    );
};

export default FamilyMemberInfo;