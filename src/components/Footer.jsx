import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {backgroundColors, colors} from "./UI/navbar/Constants";
import {p_home} from "../js/Paths";
import {Link} from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();

    const AboutLink = () => (
        <Typography
            component={Link}
            to={p_home}
            className="AboutLink"
            onClick={() => {

                window.scrollTo(0, 0);
            }}
            style={{
                color: `rgb(${colors.default})`,
                textDecoration: 'none',
                cursor: 'pointer',
                margin: '0 10px'
            }}
        >
            {t('foo.portal')}
        </Typography>
    );

    const PrivacyLink = () => (
        <Typography
            component={Link}
            href="https://youtu.be/h-5owq3FK40?si=CuFKgdvvUXUyMVAn"
            className="AboutLink"
            style={{
                color: `rgb(${colors.default})`,
                textDecoration: 'none',
                cursor: 'pointer',
                margin: '0 10px'
            }}
        >
            {t('foo.police')}
        </Typography>
    );

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
                <Toolbar style={{ display: 'flex', fontSize: '1em', fontFamily: '"Roboto","Helvetica","Arial",sans-serif'}}>
                    © 2023 {t('foo.uni')}  •  <AboutLink />  •  <PrivacyLink />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Footer;
