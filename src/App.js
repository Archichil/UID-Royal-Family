import React from "react";
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import backgroundImage from './images/background.jpg';
import {useMediaQuery} from "@mui/material";

function App() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const containerStyles =  {
        display: isSmallScreen ? 'block' : 'flex',
        justifyContent: 'center',
        background: `url(${backgroundImage}) fixed`,
        backgroundSize: 'cover',
    };
    const windowWidth = window.screen.width;
    const infoStyles = {
        width: `${windowWidth * 1.2}px`,
        minHeight: '100vh',
    };

    return (
        <div style={containerStyles}>
            <div style={infoStyles}>
                <BrowserRouter>
                    <Navbar />
                    <AppRouter />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
