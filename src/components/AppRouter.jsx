import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import FamilyMembers from "../pages/FamilyMembers";
import FamilyMemberInfo from "../pages/FamilyMemberInfo";
import {p_family_members, p_home} from "../js/Paths";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path = {p_home}> <Home/> </Route>
            <Route exact path = {p_family_members}> <FamilyMembers/> </Route>
            <Route exact path = {`${p_family_members}/:id`}> <FamilyMemberInfo/> </Route>
            <Redirect to = {p_home}/>
        </Switch>
    );
};

export default AppRouter;