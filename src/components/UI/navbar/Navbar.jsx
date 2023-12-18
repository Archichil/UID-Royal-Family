import React from 'react';
import {AppBar, Toolbar, useMediaQuery} from '@mui/material';
import {useTranslation} from "react-i18next";
import {backgroundColors} from "./Constants";
import AnimatedButtonNavbar from "./AnimatedButtonNavbar";
import AnimatedItemNavbar from "./AnimatedItemNavbar";
import RoyalLink from "./RoyalLink";

const Navbar = () => {
    const { t } = useTranslation();
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <AppBar position="static" style={{ background: backgroundColors.default }}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <RoyalLink/>
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