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

const FamilyMemberInfo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth', });
    const id = useParams().id;
    const {t} = useTranslation();

    return (
        <div>
            <Container>
                <Typography variant="h1" align="center" sx={{ my: 4 }}>
                    {t(`familyMembers.${id}.name`)}
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardMedia component="img" height="500" image={t(`familyMembers.${id}.images`, {returnObjects: true})[0]} alt={t(`familyMembers.${id}.name`)}/>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{mb: 2}} style={{whiteSpace: "pre-wrap"}}>
                            {t('lifeYears') + t(`familyMembers.${id}.birthdayDate`) + '\n'}
                            {t('age') + t(`familyMembers.${id}.age`) + '\n'}
                            {t('annotation') + t(`familyMembers.${id}.description`)}
                        </Typography>
                    </Grid>

                    <div style={{width: "100%", marginTop:"70px"}}>
                        <Typography variant="h2" align="center" sx={{ my: 4 }}>
                            {t(`timeline`)}
                        </Typography>
                        <div style={{width: "100%", height: "800px"}}>
                            <Chrono
                                items={t(`familyMembers.${id}.timelineItems`, {returnObjects: true})}
                                mode="VERTICAL_ALTERNATING"
                                allowDynamicUpdate={true}

                                cardHeight={100}
                                mediaHeight={100}
                                contentDetailsHeight={80}
                                readMore={true}

                                fontSizes={{
                                    cardSubtitle: '1.6rem',
                                    title: '1.9rem',
                                    cardTitle: '1.7rem'
                                }}

                                theme={{
                                    primary: '#212121',
                                    secondary: '',
                                    cardBgColor: 'floralwhite',
                                    titleColor: '#212121',
                                    titleColorActive: '#212121',
                                    cardTitleColor: '#212121',
                                }}

                                classNames={{
                                    cardSubTitle: 'my-card-subtitle',
                                    cardText: 'my-card-text',
                                    cardTitle: 'my-card-title',
                                    title: 'my-title',
                                }}
                            />
                        </div>
                    </div>

                    <Grid item xs={12} style={{marginTop: "70px"}}>
                        <Typography variant="h2" align="center" sx={{mb: 2}}>
                            {t('photoGallery')}
                        </Typography>
                        <GallerySlider
                            items={t(`familyMembers.${id}.images`, {returnObjects: true})}
                        />
                    </Grid>
                    <Grid item xs={12} style={{marginTop: "70px"}}>
                        <Typography variant="h2" align="center" sx={{mb: 2}}>
                            {t('youtube')}
                        </Typography>
                        <YouTube
                            link={t(`familyMembers.${id}.youtube`)}
                        />
                    </Grid>
                    <Grid item xs={12} style={{marginTop: "70px"}}>
                        <Typography variant="h2" align="center" sx={{mb: 2}}>
                            {t('googleMap')}
                        </Typography>
                        <GoogleMaps
                            link={t(`familyMembers.${id}.googleMap`)}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default FamilyMemberInfo;