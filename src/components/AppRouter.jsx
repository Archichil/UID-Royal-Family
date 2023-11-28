import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";

const AppRouter = () => {
    return (
        <Switch>
            <Route path = '/home'> <Home/> </Route>
            <Redirect to = '/home'/>
        </Switch>
    );
};

export default AppRouter;