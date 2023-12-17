import React from 'react';
import {Typography} from "@mui/material";
import {colors} from "../navbar/Constants";
import {useTranslation} from "react-i18next";

const PrivacyLink = () => {
    const { t } = useTranslation();
    const foo = t("foo", { returnObjects: true });
    return (
        <Typography
            component="a"
            href="https://youtu.be/h-5owq3FK40?si=CuFKgdvvUXUyMVAn"
            target="_blank"
            rel="noopener noreferrer"
            className="AboutLink"
            style={{
                color: `rgb(${colors.default})`,
                textDecoration: 'none',
                cursor: 'pointer',
                margin: '0 10px'
            }}
        >
            {foo['police']}
        </Typography>
    );
};

export default PrivacyLink;