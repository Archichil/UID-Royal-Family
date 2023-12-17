import React from 'react';
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {p_home} from "../../../js/Paths";
import {colors} from "../navbar/Constants";
import {useTranslation} from "react-i18next";

const AboutLink = () => {
    const { t } = useTranslation();
    const foo = t("foo", { returnObjects: true });

    return (
        <Typography
            component={Link}
            to={p_home}
            className="AboutLink"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth', })}
            style={{
                color: `rgb(${colors.default})`,
                textDecoration: 'none',
                cursor: 'pointer',
                margin: '0 10px',
            }}
        >
            {foo['portal']}
        </Typography>
    );
};

export default AboutLink;