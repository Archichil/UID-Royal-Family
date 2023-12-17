import React from 'react';
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Chrono} from "react-chrono";


const FamilyMemberInfo = () => {
    const id = useParams().id;
    const {t} = useTranslation();

    return (
        <div>
            <div style={{width: "100%", height: "600px"}}>
                <Chrono
                    items={t(`familyMembers.${id}.timelineItems`, { returnObjects: true })}
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

export default FamilyMemberInfo;