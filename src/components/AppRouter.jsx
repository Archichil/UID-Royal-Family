import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import FamilyMembers from "../pages/FamilyMembers";

const AppRouter = () => {
    return (
        <Switch>
            <Route path = '/home'> <Home/> </Route>
            <Route path = '/family_members'> <FamilyMembers/> </Route>
            <Redirect to = '/home'/>
        </Switch>
    );
};

export default AppRouter;