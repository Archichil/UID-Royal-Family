import React from 'react';
import {AppBar, Toolbar, Typography, useMediaQuery} from '@mui/material';
import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import {backgroundColors, colors} from "./Constants";
import AnimatedButtonNavbar from "./AnimatedButtonNavbar";
import AnimatedItemNavbar from "./AnimatedItemNavbar";
import {p_home} from "../../../js/Paths";

const Navbar = () => {
    const { t } = useTranslation();
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <AppBar position="static" style={{ background: backgroundColors.default }}>
            <Toolbar style={isSmallScreen ? { display: 'flex', justifyContent: 'space-between' } : {}}>
                <Typography
                    component={Link}
                    to={p_home}
                    variant="h6"
                    style={{
                        marginRight: '2em',
                        fontSize: '1.5em',
                        color: `rgb(${colors.default})`,
                        textDecoration: 'none',
                        width: '15%',
                    }}
                >
                    {t('navbar.title')}
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {isSmallScreen
                        ? ( <AnimatedItemNavbar/> )
                        : ( <AnimatedButtonNavbar/> )
                    }
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;