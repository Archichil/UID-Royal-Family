import React from 'react';
import {AppBar, Box, Toolbar, useMediaQuery} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {backgroundColors} from "../navbar/Constants";
import AnimatedButtonFooter from './AnimatedButtonFooter';
import AnimatedItemNavbar from './AnimatedItemNavbar';
import RoyalLink from "../navbar/RoyalLink";

const Footer = () => {
    const { t } = useTranslation();
    const foo = t("foo", { returnObjects: true });
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <Box>
            <AppBar
                position="static"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexFlow: 'wrap',
                    justifyContent: 'space-between',
                    minHeight: '100px',
                    background: backgroundColors.default,
                }}
            >
                <Toolbar>
                    <RoyalLink/>
                </Toolbar>
                <Toolbar style={{ display: 'flex', fontSize: '0.8em', fontFamily: '"Roboto","Helvetica","Arial",sans-serif',}}>
                    © 2023 {foo['uni']}
                    { isSmallScreen ? <AnimatedItemNavbar /> : <AnimatedButtonFooter /> }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Footer;
