import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import CardsTemplate from "../components/CardsTemplate";
import FamilyMemberCardInfo from "../components/FamilyMemberCardInfo";
import Container from "@mui/material/Container";

const members = [
    // { id: 'king-willem-alexander', name: 'King Willem-Alexander', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/king-willem-alexander-2020-01-3-2.jpg'},
    // { id: 'queen-maxima', name: 'Queen Máxima', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/queen-maxima-2020-01-3-2.jpg'},
    // { id: 'princess-beatrix', name: 'Princess Beatrix', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/portretfoto-s/prinses-beatrix/princess-beatrix-2020-1.jpg'},
    // { id: 'the-princess-of-orange', name: 'The Princess of Orange', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/princesss-of-orange-2021-03.jpg'},
    // { id: 'princess-alexia', name: 'Princess Alexia', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/2023-princess-alexia-03-small.jpg'},
    // { id: 'princess-ariane', name: 'Princess Ariane', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/2020-princess-ariane-1200x800.jpg'},
    // { id: 'prince-constantijn', name: 'Prince Constantijn', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/portretfoto-s/prins-constantijn/prince-constantijn-03-2020.jpg'},
    // { id: 'princess-laurentien', name: 'Princess Laurentien', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/portretfoto-s/prinses-laurentien/princess-laurentien-03-2020.jpg'},
    // { id: 'princess-margriet', name: 'Princess Margriet', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/princess-margriet-2020-01-3-2.jpg'}
    { id: 1, name: 'King Willem-Alexander', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/king-willem-alexander-2020-01-3-2.jpg'},
    { id: 2, name: 'Queen Máxima', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/queen-maxima-2020-01-3-2.jpg'},
    { id: 3, name: 'Princess Beatrix', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/portretfoto-s/prinses-beatrix/princess-beatrix-2020-1.jpg'},
    { id: 4, name: 'The Princess of Orange', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/princesss-of-orange-2021-03.jpg'},
    { id: 5, name: 'Princess Alexia', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/2023-princess-alexia-03-small.jpg'},
    { id: 6, name: 'Princess Ariane', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/2020-princess-ariane-1200x800.jpg'},
    { id: 7, name: 'Prince Constantijn', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/portretfoto-s/prins-constantijn/prince-constantijn-03-2020.jpg'},
    { id: 8, name: 'Princess Laurentien', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/portretfoto-s/prinses-laurentien/princess-laurentien-03-2020.jpg'},
    { id: 9, name: 'Princess Margriet', src: 'https://www.royal-house.nl/binaries/medium/content/gallery/royalhouse/content-afbeeldingen/fotonavigatie-450x300/portretfotos/princess-margriet-2020-01-3-2.jpg'}

];

const FamilyMembers = () => {
    const [searchTerm, setSearchTerm] = useState('');

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
                label="Поиск"
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
