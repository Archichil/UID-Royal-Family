import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import FamilyMembers from "../pages/FamilyMembers";
import FamilyMemberInfo from "../pages/FamilyMemberInfo";

const AppRouter = () => {
    return (
        <Switch>
            <Route path = '/home'> <Home/> </Route>
            <Route exact path = '/family_members'> <FamilyMembers/> </Route>
            <Route exact path = '/family_members/:id'> <FamilyMemberInfo/> </Route>
            <Redirect to = '/home'/>
        </Switch>
    );
};

export default AppRouter;