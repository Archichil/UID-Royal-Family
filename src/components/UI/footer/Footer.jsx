import React from 'react';
import {AppBar, Box, Toolbar, Typography, useMediaQuery} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {backgroundColors, colors} from "../navbar/Constants";
import {Link} from 'react-router-dom';
import AnimatedButtonFooter from './AnimatedButtonFooter';
import AnimatedItemNavbar from './AnimatedItemNavbar';

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
                    <Typography
                        component={Link}
                        to="/"
                        variant="h6"
                        style={{
                            fontSize: '1.5em',
                            color: `rgb(${colors.default})`,
                            textDecoration: 'none',
                        }}
                    >
                        {t('navbar.title')}
                    </Typography>
                </Toolbar>
                <Toolbar style={{ display: 'flex', fontSize: '1em', fontFamily: '"Roboto","Helvetica","Arial",sans-serif',}}>
                    © 2023 {foo['uni']}
                    { isSmallScreen ? <AnimatedItemNavbar /> : <AnimatedButtonFooter /> }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Footer;
