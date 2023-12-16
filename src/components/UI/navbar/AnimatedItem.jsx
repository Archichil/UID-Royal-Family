import React from 'react';
import {animated, useSpring} from "react-spring";
import {MenuItem} from "@mui/material";
import {Link} from "react-router-dom";
import {animationProps, colors, getBackground} from './Constants';

const AnimatedItem = ({ to, onClick, isSelected, label }) => {
    const [style, setStyle] = useSpring(() => ({
        ...animationProps
    }));

    return (
        <animated.div
            style={{
                color: style.color.interpolate((c) => `rgb(${c})`),
            }}
        >
            <MenuItem
                component={to ? Link : animated.button}
                to={to}
                color="inherit"
                onMouseEnter={() => setStyle({ color: colors.gold })}
                onMouseLeave={() => setStyle({ color: colors.default })}
                onTouchStart={() => setStyle({ color: colors.gold })}
                onTouchEnd={() => setStyle({ color: colors.default })}
                onClick={onClick}
                style={{ background: getBackground(isSelected), width: '100%', }}
            >
                {label}
            </MenuItem>
        </animated.div>
    );
};

export default AnimatedItem;