import React from 'react';
import Stack from '@mui/material/Stack';
import Container from "@mui/material/Container";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import '../css/Descriptoin.css';

const Description = () => {
    return (
        <Container className='mainContainer' maxWidth="fm">
            <Stack direction="row" className="mainStack">
                <Stack direction="column" className="sideStack">
                    <p className='mainText'> О ЧЕМ </p>
                    <Divider sx={{ width: '80%' }} color="black"/>
                    <p className='sideText'>
                        На сайте вы сможете познакомиться и узнать что-то новое о
                        голландской королевской семьей и о ее членах в частности
                    </p>
                </Stack>
                <Stack direction="column" className="sideStack">
                    <p className='mainText'>  ЦЕЛИ </p>
                    <Divider sx={{ width: '80%' }} color="black"/>
                    <p className='sideText'>
                        Наш портал ставит своей целью просвятить общество,
                        что есть и иные королевские семьи кроме британской
                    </p>
                </Stack>
                <Stack direction="column" className="sideStack">
                    <p className='mainText'> КОМУ </p>
                    <Divider sx={{ width: '80%' }} color="black"/>
                    <p className='sideText'>
                        Кроме историков и 'прошаренных' людей сайт подойдет
                        и для обычных любознательных пользователей
                    </p>
                </Stack>
            </Stack>
        </Container>

    );
};

export default Description;