import React from 'react';
import {Link} from "react-router-dom";
import {p_home} from "../../../js/Paths";
import {colors} from "./Constants";
import {useTranslation} from "react-i18next";
import {Typography} from '@mui/material';

const RoyalLink = () => {
    const { t } = useTranslation();
    return (
        <Typography
            component={Link}
            to={p_home}
            variant="h6"
            style={{
                color: `rgb(${colors.default})`,
                textDecoration: 'none',
            }}
        >
            {t('navbar.title')}
        </Typography>
    );
};

export default RoyalLink;