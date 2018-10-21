import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './Dashboard/Header';
import Sidebar from './Dashboard/Sidebar';
import Footer from './Dashboard/Footer';
import Main from './Dashboard/Main';
import Trade from './Dashboard/Trade';

import { DashboardWrapper } from '../styles/dashboard';


export default ({ match }) => {

    console.log(match);

    return (
        <DashboardWrapper>
            <Header />
            <Sidebar />
            <Switch>
                <Route path="/dashboard/trade" component={Trade} />
                <Route path="/dashboard/home" component={Main} />
            </Switch>
            <Footer />
        </DashboardWrapper>)
};