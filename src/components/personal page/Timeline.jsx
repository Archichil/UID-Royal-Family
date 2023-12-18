import React from 'react';
import {Typography} from "@mui/material";
import {Chrono} from "react-chrono";
import {useTranslation} from "react-i18next";

const Timeline = ({ familyMember }) => {
    const {t} = useTranslation();
    return (
        <div style={{width: "100%", marginTop:"70px"}}>
            <Typography variant="h2" align="center" sx={{ my: 4 }}>
                {t(`timeline`)}
            </Typography>
            <div style={{width: "100%", height: "800px"}}>
                <Chrono
                    items={familyMember['timelineItems']}
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
    );
};

export default Timeline;