import React from "react";
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import Doer from "./components/Doer";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
            <Doer/>
        </BrowserRouter>
    );
}

export default App;
