import React from 'react';
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Container, Grid,} from '@mui/material';
import GoogleMap from "../components/personal page/GoogleMap";
import PhotoGallery from "../components/personal page/PhotoGallery";
import Timeline from "../components/personal page/Timeline";
import Info from "../components/personal page/Info";
import Youtube from '../components/personal page/Youtube';
import {images} from '../js/Images';
import '../css/MemberInfo.css'

const FamilyMemberInfo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth', });
    const id = useParams().id;
    const {t} = useTranslation();
    const familyMember = t(`familyMembers.${id}`, {returnObjects: true});
    const family_images = images[id];
    return (
        <div>
            <Container>
                <p className='mainTextMember'>
                    {familyMember['name']}
                </p>
                <Grid container spacing={4}>
                    <Info familyMember={familyMember} images={family_images}/>
                    <Timeline familyMember={familyMember}/>
                    <PhotoGallery images={family_images}/>
                    <Youtube familyMember={familyMember}/>
                    <GoogleMap familyMember={familyMember}/>
                </Grid>
            </Container>
        </div>
    );
};

export default FamilyMemberInfo;