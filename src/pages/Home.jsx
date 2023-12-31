import React from 'react';
import TeamDescription from "../components/TeamDescription";
import Description from "../components/Description";
import Doer from "../components/Doer";

const Home = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Description />
            <Doer />
            <TeamDescription />
        </div>
    );
};

export default Home;