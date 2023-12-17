import React from 'react';
import {useTranslation} from "react-i18next";
import AnimatedButton from "../navbar/AnimatedButton";
import {p_family_members, p_home} from "../../../js/Paths";

const AnimatedButtonFooter = () => {
    const { t } = useTranslation();
    const foo = t("foo", { returnObjects: true });

    return (
        <div style={{ display: 'flex', marginLeft: '1rem' }}>
            <AnimatedButton
                to={p_home}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth', })}
                label={foo['portal']}
            />
            <AnimatedButton
                onClick={() => window.open("https://youtu.be/h-5owq3FK40?si=CuFKgdvvUXUyMVAn", "_blank")}
                label={foo['police']}
            />
        </div>
    );
};

export default AnimatedButtonFooter;