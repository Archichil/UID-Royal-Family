import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import MenuIcon from '@mui/icons-material/Menu';
import {p_home, p_family_members} from "../../../js/Paths";

const backgroundColors = {
    default: '#222',
    highlighted: '#2f2f2f',
}

const interpolateColor = (style) => {
    return style.color.interpolate((c) => `rgb(${c})`);
};

const colors = {
    default: '255,255,255',
    gold: '255,223,0',
};

const animationConfig = {
    duration: 250,
    tension: 120,
    friction: 14,
    mass: 1,
};

const animationProps = {
    color: colors.default,
    config: animationConfig,
};

const getBackground = (isTarget) => {
    return isTarget ? backgroundColors.highlighted : backgroundColors.default;
};

const Navbar = () => {
    const [styleHome, setHome] = useSpring(() => ({
        ...animationProps,
    }));
    const [styleFamily, setFamily] = useSpring(() => ({
        ...animationProps,
    }));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenuClick = (event) => { setAnchorEl(event.currentTarget);};
    const handleMenuClose = () => { setAnchorEl(null); };
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const location = useLocation();
    return (
        <AppBar position="static" style={{ background: backgroundColors.default }}>
            <Toolbar style={isSmallScreen ? { display: 'flex', justifyContent: 'space-between' } : {}}>
                <Typography variant="h6" style={{ marginRight: '2em', fontSize: '1.5em' }}>
                    Royal Family
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {isSmallScreen ? (
                        <>
                            <IconButton color="inherit" onClick={handleMenuClick}>
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                PaperProps={{ style: { background: backgroundColors.default } }}
                            >
                                <animated.div
                                    style={{
                                        color: interpolateColor(styleHome),
                                    }}
                                >
                                    <MenuItem
                                        component={Link}
                                        to="/home"
                                        onClick={handleMenuClose}
                                        onTouchStart={() => setHome({ color: colors.gold })}
                                        onTouchEnd={() => setHome({ color: colors.default })}
                                        style={{background: getBackground(location.pathname === p_home)}}
                                    >
                                        Home
                                    </MenuItem>
                                </animated.div>
                                <animated.div
                                    style={{
                                        color: interpolateColor(styleFamily),
                                    }}
                                >
                                    <MenuItem
                                        component={Link}
                                        to="/family_members"
                                        onClick={handleMenuClose}
                                        onTouchStart={() => setFamily({ color: colors.gold })}
                                        onTouchEnd={() => setFamily({ color: colors.default })}
                                        style={{background: getBackground(location.pathname === p_family_members)}}
                                    >
                                        Family Members
                                    </MenuItem>
                                </animated.div>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <animated.div
                                style={{
                                    color: interpolateColor(styleHome),
                                    marginRight: '1em',
                                }}
                            >
                                <Button
                                    component={Link}
                                    to="/home"
                                    color="inherit"
                                    onMouseEnter={() => setHome({ color: colors.gold })}
                                    onMouseLeave={() => setHome({ color: colors.default })}
                                    style={{background: getBackground(location.pathname === p_home)}}
                                >
                                    Home
                                </Button>
                            </animated.div>
                            <animated.div
                                style={{
                                    color: interpolateColor(styleFamily),
                                }}
                            >
                                <Button
                                    component={Link}
                                    to="/family_members"
                                    color="inherit"
                                    onMouseEnter={() => setFamily({ color: colors.gold })}
                                    onMouseLeave={() => setFamily({ color: colors.default })}
                                    style={{background: getBackground(location.pathname === p_family_members)}}
                                >
                                    Family Members
                                </Button>
                            </animated.div>
                        </>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;