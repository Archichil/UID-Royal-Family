import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useMediaQuery, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import MenuIcon from '@mui/icons-material/Menu';

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

    return (
        <AppBar position="static" style={{ background: '#222' }}>
            <Toolbar>
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
                                PaperProps={{ style: { background: '#222' } }}
                            >
                                <animated.div
                                    style={{
                                        color: styleHome.color.interpolate((c) => `rgb(${c})`),
                                    }}
                                >
                                    <MenuItem
                                        component={Link}
                                        to="/home"
                                        onClick={handleMenuClose}
                                        onTouchStart={() => setHome({ color: colors.gold })}
                                        onTouchEnd={() => setHome({ color: colors.default })}
                                    >
                                        Home
                                    </MenuItem>
                                </animated.div>
                                <animated.div
                                    style={{
                                        color: styleFamily.color.interpolate((c) => `rgb(${c})`),
                                    }}
                                >
                                    <MenuItem
                                        component={Link}
                                        to="/family_members"
                                        onClick={handleMenuClose}
                                        onTouchStart={() => setFamily({ color: colors.gold })}
                                        onTouchEnd={() => setFamily({ color: colors.default })}
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
                                    color: styleHome.color.interpolate((c) => `rgb(${c})`),
                                    marginRight: '1em',
                                }}
                            >
                                <Button
                                    component={Link}
                                    to="/home"
                                    color="inherit"
                                    onMouseEnter={() => setHome({ color: colors.gold })}
                                    onMouseLeave={() => setHome({ color: colors.default })}
                                >
                                    Home
                                </Button>
                            </animated.div>
                            <animated.div
                                style={{
                                    color: styleFamily.color.interpolate((c) => `rgb(${c})`),
                                }}
                            >
                                <Button
                                    component={Link}
                                    to="/family_members"
                                    color="inherit"
                                    onMouseEnter={() => setFamily({ color: colors.gold })}
                                    onMouseLeave={() => setFamily({ color: colors.default })}
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