import React from 'react';
import Stack from "@mui/material/Stack";
import '../css/DoerSection.css';

const Doer = () => {
    const handleButtonClick = () => {
    };

    return (
        <div className="doer_section">
            <p className="sectionName">Королевский представитель дня</p>
            {/*<div className="descriptDoer">*/}
            <Stack
                 direction={{ xs: 'column', sm: 'row' }}
                 spacing={5}
                 alignItems='center'
                 justifyContent="center"
                 className="descriptDoer">
                <div className="photoDoerEdging">
                    <img className="photoDoer" alt={'doer'} src="https://www.tvr.by/upload/iblock/a13/b6k91b5ew8wt3me9iravpe7ty20tml63.jpg" ></img>
                    {/*<img className="photoDoer" src="{data.imageUrl}" alt="{data.namePerson}"></img>*/}
                </div>
                <div className="descriptZone">
                    <p className="nameZone">Карл |||</p>
                    {/*<p className="nameZone">{data.namePerson}</p>*/}
                    <p className="shortDescript">Карл III (1716–1788), также известный как Карл III Бурбон,
                        был королём Испании с 1759 по 1788 год. Он был представителем династии
                        Бурбонов и вторым сыном Филиппа V. Во время своего правления Карл III
                        провёл ряд реформ и модернизаций в Испании.</p>
                    {/*<p className="shortDescript">{data.descriptionPerson}</p>*/}
                    <button className="btnDoer" onClick={handleButtonClick}>
                        Просмотр
                    </button>
                </div>
            </Stack>
            {/*</div>*/}
        </div>
    );
};

export default Doer;
