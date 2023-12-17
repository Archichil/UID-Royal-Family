import React from 'react';
import {p_family_members, p_home} from "../../../js/Paths";
import {useTranslation} from "react-i18next";
import AnimatedItem from "../navbar/AnimatedItem";
import {IconButton, Menu} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {backgroundColors} from "../navbar/Constants";
import {swapLanguage} from "../../../i18n";

const AnimatedItemNavbar = () => {
    const { t } = useTranslation();
    const foo = t("foo", { returnObjects: true });

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenuClick = (event) => { setAnchorEl(event.currentTarget);};
    const handleMenuClose = () => { setAnchorEl(null); };

    return (
        <div style={{ display: 'flex', marginLeft: '1rem' }}>
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
                    onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth', }); handleMenuClose();}}
                    label={foo['portal']}
                />
                <AnimatedItem
                    onClick={() => {window.open("https://youtu.be/h-5owq3FK40?si=CuFKgdvvUXUyMVAn", "_blank"); handleMenuClose();}}
                    label={foo['police']}
                />
            </Menu>
        </div>
    );
};

export default AnimatedItemNavbar;