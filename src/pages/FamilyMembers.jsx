import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import CardsTemplate from "../components/CardsTemplate";
import FamilyMemberCardInfo from "../components/FamilyMemberCardInfo";
import Container from "@mui/material/Container";
import {useTranslation} from "react-i18next";
import {membersId} from "../js/MembersId";
import {images} from '../js/Images';
import {p_home} from "../js/Paths";

const FamilyMembers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { t } = useTranslation();
    const familyMembers = t(`familyMembers`, { returnObjects: true });

    const members = [];

    for (const id of membersId) {
        const familyMember = familyMembers[id];
        members.push({id : id, name: familyMember.name, src: p_home + images[id][0]});
    }

    const filteredData = members.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const filteredMemberCards = filteredData.map((member) => (
        <FamilyMemberCardInfo
            width='320px'
            height='320px'
            id={member.id}
            name={member.name}
            src={member.src}
            refer={member.refer}
        />
    ));

    return (
        <div style={{ minHeight: '100vh' }}>
            <TextField
                label={t('search')}
                variant="filled"
                fullWidth
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '20px' }}
            />

            <Container maxWidth="fm">
                <CardsTemplate>{filteredMemberCards}</CardsTemplate>
            </Container>
        </div>
    );
};

export default FamilyMembers;
