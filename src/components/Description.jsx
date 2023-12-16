import React from 'react';
import Container from "@mui/material/Container";
import CardsTemplate from "./CardsTemplate";
import DescriptionCardInfo from "./DescriptionCardInfo";
import "../css/Description.css"

const Description = () => {
    const title = [
        'О ЧЕМ',
        'ЦЕЛИ',
        'КОМУ'
    ]

    const info = [
        'На сайте вы сможете познакомиться и узнать что-то новое о\n' +
        '                голландской королевской семьей и о ее членах в частности',

        'Наш портал ставит своей целью просвятить общество,\n' +
        '                что есть и иные королевские семьи кроме британской',

        'Кроме историков и \'прошаренных\' людей сайт подойдет\n' +
        '                и для обычных любознательных пользователей'
    ]

    const cardsInfo1 =
        <DescriptionCardInfo width='400px' height='320px' title={title[0]} info={info[0]} />

    const cardsInfo2 =
        <DescriptionCardInfo width='400px' height='320px' title={title[1]} info={info[1]} />

    const cardsInfo3 = (
        <DescriptionCardInfo width='400px' height='320px' title={title[2]} info={info[2]} />
    )

    return (
        <Container className='mainContainer' maxWidth="fm">
            <CardsTemplate>{[cardsInfo1, cardsInfo2, cardsInfo3]}</CardsTemplate>
        </Container>
    );
};

export default Description;