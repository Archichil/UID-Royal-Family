import React from 'react';
import {IconButton, Menu} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {backgroundColors} from "./Constants";
import AnimatedItem from "./AnimatedItem";
import {swapLanguage} from "../../../i18n";
import {p_family_members, p_home} from "../../../js/Paths";
import {useTranslation} from "react-i18next";
import {useLocation} from "react-router-dom";

const AnimatedItemNavbar = () => {
    const { t } = useTranslation();
    const location = useLocation();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenuClick = (event) => { setAnchorEl(event.currentTarget);};
    const handleMenuClose = () => { setAnchorEl(null); };

    return (
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
                <AnimatedItem
                    to={p_home}
                    onClick={handleMenuClose}
                    isSelected={location.pathname === p_home}
                    label={t('navbar.home')}
                />
                <AnimatedItem
                    to={p_family_members}
                    onClick={handleMenuClose}
                    isSelected={location.pathname === p_family_members}
                    label={t('navbar.familyMembers')}
                />
                <AnimatedItem
                    onClick={() => {handleMenuClose(); swapLanguage();}}
                    label={t('navbar.current_language')}
                />
            </Menu>
        </>
    );
};

export default AnimatedItemNavbar;