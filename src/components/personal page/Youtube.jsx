import React from 'react';
import {Grid, Typography} from "@mui/material";
import YouTubeWidget from "../UI/YouTubeWidget";
import {useTranslation} from "react-i18next";

const Youtube = ({ familyMember }) => {
    const {t} = useTranslation();
    return (
        <Grid item xs={12} style={{marginTop: "70px"}}>
            <Typography variant="h2" align="center" sx={{mb: 2}}>
                {t('youtube')}
            </Typography>
            <YouTubeWidget
                link={familyMember['youtube']}
            />
        </Grid>
    );
};

export default Youtube;