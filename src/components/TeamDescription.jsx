import React from 'react';
import {Avatar, Card, Grid, Link as MuiLink, Typography} from '@mui/material';
import '../css/TeamDescription.css';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import {useTranslation} from "react-i18next";

const TeamDescription = () => {
    const { t } = useTranslation();
    const authors = t("authors", { returnObjects: true });
    const teamMembers = [
        { name: authors['egor']['name'], github: 'https://github.com/riborok', instagram: 'https://www.instagram.com/egorpnkrtw/', telegram: 'https://t.me/egorpnkrtw', alias:  authors['egor']['alias'], image: "https://avatars.githubusercontent.com/u/112758007?v=4" },
        { name: authors['artur']['name'], github: 'https://github.com/Archichil', instagram: 'https://www.instagram.com/k.archichil/', telegram: 'https://t.me/Archichil', alias: authors['artur']['alias'], image: authors['artur']['img-url']},
        { name: authors['stas']['name'], github: 'https://github.com/Ferret451', instagram: 'https://www.instagram.com/ferrett451/', telegram: 'https://t.me/Ferret451', alias: authors['stas']['alias'], image: "https://avatars.githubusercontent.com/u/112757776?v=4"},
        { name: authors['yana']['name'], github: 'https://github.com/Rawwzer', instagram: 'https://www.instagram.com/rawwzero/', telegram: 'https://t.me/RawwZer', alias: authors['yana']['alias'], image: "https://avatars.githubusercontent.com/u/82700519?v=4"}
    ];

    return (
        <div style={{ marginTop: '2%', marginBottom: '2%'}}>
            <p className='team-section-name'>
                {authors['title']}
            </p>
            <Grid className={"dev-cards"} container spacing={2} justifyContent="center" style={{ marginTop: '1%' }}>
                {teamMembers.map((member, index) => (
                    <Grid item key={index}>
                        <Card className={'developer-card'} elevation={10}>
                            <Avatar className={"developer-avatar"} alt={member.name} src={member.image} sx={{ width: 150, height: 150 }}/>
                            <Typography variant="h5">{member.name}</Typography>
                            <Typography variant="h6">{member.alias}</Typography>
                            <div className={'social-icons'}>
                                <MuiLink href={member.github} target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon fontSize="large"/>
                                </MuiLink>
                                <MuiLink href={member.telegram} target="_blank" rel="noopener noreferrer">
                                    <TelegramIcon fontSize="large"/>
                                </MuiLink>
                                <MuiLink href={member.instagram} target="_blank" rel="noopener noreferrer">
                                    <InstagramIcon fontSize="large"/>
                                </MuiLink>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default TeamDescription;
