import React from 'react';
import Container from "@mui/material/Container";
import CardsTemplate from "./CardsTemplate";
import DescriptionCardInfo from "./DescriptionCardInfo";
import "../css/Description.css"
import {useTranslation} from "react-i18next";

const Description = () => {
    const {t} = useTranslation();

    const cardsInfo1 = <DescriptionCardInfo width='400px' height='320px' title={t('description.titles.about')} info={t('description.info.about')} />
    const cardsInfo2 = <DescriptionCardInfo width='400px' height='320px' title={t('description.titles.aims')} info={t('description.info.aims')} />
    const cardsInfo3 = <DescriptionCardInfo width='400px' height='320px' title={t('description.titles.toWhom')} info={t('description.info.toWhom')} />

    return (
        <Container className='mainContainer' maxWidth="fm">
            <CardsTemplate>{[cardsInfo1, cardsInfo2, cardsInfo3]}</CardsTemplate>
        </Container>
    );
};

export default Description;