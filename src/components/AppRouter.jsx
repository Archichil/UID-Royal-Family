import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import FamilyMembers from "../pages/FamilyMembers";
import FamilyMemberInfo from "../pages/FamilyMemberInfo";
import {p_home, p_family_members} from "../js/Paths";

const AppRouter = () => {
    return (
        <Switch>
            <Route path = {p_home}> <Home/> </Route>
            <Route exact path = {p_family_members}> <FamilyMembers/> </Route>
            <Route exact path = {`${p_family_members}/:id`}> <FamilyMemberInfo/> </Route>
            <Redirect to = {p_home}/>
        </Switch>
    );
};

export default AppRouter;