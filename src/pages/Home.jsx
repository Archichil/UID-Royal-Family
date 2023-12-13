import React from 'react';
import TeamDescription from "../components/TeamDescription";
import Description from "../components/Description";
import Doer from "../components/Doer";

const Home = () => {
    return (
        <div>
            <Description />
            <TeamDescription />
            <Doer/>
        </div>
    );
};

export default Home;