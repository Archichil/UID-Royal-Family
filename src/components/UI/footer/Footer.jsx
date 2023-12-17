import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {backgroundColors, colors} from "../navbar/Constants";
import {p_home} from "../../../js/Paths";
import { useSpring, animated } from 'react-spring';
import {Link} from 'react-router-dom';
import AboutLink from './AboutLink';
import PrivacyLink from './PrivacyLink';

const Footer = () => {
    const { t } = useTranslation();
    const foo = t("foo", { returnObjects: true });
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
                <Toolbar style={{ display: 'flex', fontSize: '1em', fontFamily: '"Roboto","Helvetica","Arial",sans-serif', whiteSpace: 'pre',}}>
                    © 2023 {foo['uni']}     •<AboutLink />     •<PrivacyLink />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Footer;
