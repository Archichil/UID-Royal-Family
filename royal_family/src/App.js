import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import About from "./pages/About";
import Navbar from "./components/UI/navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path = '/about'> <About/> </Route>
                <Redirect to = '/about'/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
