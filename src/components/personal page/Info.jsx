import React from 'react';
import {Card, CardMedia, Grid, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {p_home} from "../../js/Paths";

const Info = ({ familyMember, images }) => {
    const {t} = useTranslation();
    return (
        <>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardMedia component="img" height="500" image={p_home + images[0]} alt={familyMember['name']}/>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h4" sx={{mb: 2}} style={{whiteSpace: "pre-wrap"}}>
                    {t('lifeYears') + familyMember['birthdayDate'] + '\n'}
                    {t('age') + familyMember['age'] + '\n'}
                    {t('annotation') + familyMember['description']}
                </Typography>
            </Grid>
        </>
    );
};

export default Info;