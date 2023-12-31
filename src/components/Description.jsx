import React from 'react';
import Container from "@mui/material/Container";
import CardsTemplate from "./CardsTemplate";
import DescriptionCardInfo from "./DescriptionCardInfo";
import "../css/Description.css"
import {useTranslation} from "react-i18next";

const Description = () => {
    const { t } = useTranslation();
    const titles = t("description.titles", { returnObjects: true });
    const info = t("description.info", { returnObjects: true });

    const cardsInfo1 = <DescriptionCardInfo width='400px' height='290px' title={titles['about']} info={info['about']} />
    const cardsInfo2 = <DescriptionCardInfo width='400px' height='290px' title={titles['aims']} info={info['aims']} />
    const cardsInfo3 = <DescriptionCardInfo width='400px' height='290px' title={titles['toWhom']} info={info['toWhom']} />

    return (
        <Container className='mainContainer' maxWidth="fm">
            <CardsTemplate>{[cardsInfo1, cardsInfo2, cardsInfo3]}</CardsTemplate>
        </Container>
    );
};

export default Description;