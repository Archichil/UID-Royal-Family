import React from "react";
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import backgroundImage from './images/background.jpg';

function App() {
    const styles = {
        background: `url(${backgroundImage}) fixed`,
        backgroundSize: 'cover'
    };
    return (
        <div style={styles}>
            <BrowserRouter>
                    <Navbar/>
                    <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
