import React from 'react';
import Stack from "@mui/material/Stack";
import '../css/DoerSection.css';
import {useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {p_family_members} from "../js/Paths";
import {getDailyMemberId} from "../js/DailyRandom";

const Doer = () => {
    const { t } = useTranslation();
    const dailyMemberInfo = t("dailyMemberInfo", { returnObjects: true });
    const router = useHistory();
    const dailyMemberId = getDailyMemberId();
    const dailyMember = t(`familyMembers.${dailyMemberId}`, { returnObjects: true });

    return (
        <div className="doer_section">
            <p className="sectionName">{dailyMemberInfo['title']}</p>
            <Stack
                 direction={{ xs: 'column', sm: 'row' }}
                 spacing={5}
                 alignItems='center'
                 justifyContent="center"
                 className="descriptDoer">
                <div className="photoDoerEdging">
                    <img className="photoDoer" alt={'doer'} src={dailyMember['images'][0]} ></img>
                </div>
                <div className="descriptZone">
                    <p className="nameZone">{dailyMember['name']}</p>
                    <p className="shortDescript">{dailyMember['description']}</p>
                    <button className="btnDoer" onClick={() => router.push(`${p_family_members}/${dailyMemberId}`)}>
                        {dailyMemberInfo['buttonName']}
                    </button>
                </div>
            </Stack>
        </div>
    );
};

export default Doer;
