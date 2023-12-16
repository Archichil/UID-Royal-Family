import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import CardsTemplate from "../components/CardsTemplate";
import FamilyMemberCardInfo from "../components/FamilyMemberCardInfo";
import Container from "@mui/material/Container";
import {useTranslation} from "react-i18next";

const FamilyMembers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const {t} = useTranslation();

    const members = [
        { id: 1, name: t('familyMembersName.willem'), src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/king-willem-alexander-2020-01-3-2.jpg'},
        { id: 2, name: t('familyMembersName.maxima'), src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/queen-maxima-2020-01-3-2.jpg'},
        { id: 3, name: t('familyMembersName.beatrix'), src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/portretfoto-s/prinses-beatrix/princess-beatrix-2020-1.jpg'},
        { id: 4, name: t('familyMembersName.orange'), src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/princesss-of-orange-2021-03.jpg'},
        { id: 5, name: t('familyMembersName.alex'), src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/2023-princess-alexia-03-small.jpg'},
        { id: 6, name: t('familyMembersName.ariane'), src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/2020-princess-ariane-1200x800.jpg'},
        { id: 7, name: t('familyMembersName.const'), src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/portretfoto-s/prins-constantijn/prince-constantijn-03-2020.jpg'},
        { id: 8, name: t('familyMembersName.laurien'), src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/portretfoto-s/prinses-laurentien/princess-laurentien-03-2020.jpg'},
        { id: 9, name: t('familyMembersName.margriet'), src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/princess-margriet-2020-01-3-2.jpg'}
    ];

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
        <div style={{ padding: '20px' }}>
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
