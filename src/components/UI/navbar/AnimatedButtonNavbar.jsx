import React from 'react';
import AnimatedButton from "./AnimatedButton";
import {p_family_members, p_home} from "../../../js/Paths";
import {swapLanguage} from "../../../i18n";
import {useTranslation} from "react-i18next";
import {useLocation} from "react-router-dom";

const AnimatedButtonNavbar = () => {
    const { t } = useTranslation();
    const navbar = t("navbar", { returnObjects: true });

    const location = useLocation();

    return (
        <>
            <AnimatedButton
                to={p_home}
                isSelected={location.pathname === p_home}
                label={navbar['home']}
            />
            <AnimatedButton
                to={p_family_members}
                isSelected={location.pathname === p_family_members}
                label={navbar['familyMembers']}
            />
            <AnimatedButton
                onClick={swapLanguage}
                label={navbar['current_language']}
            />
        </>
    );
};

export default AnimatedButtonNavbar;