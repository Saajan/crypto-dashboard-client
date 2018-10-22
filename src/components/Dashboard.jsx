import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './Dashboard/Header';
import Sidebar from './Dashboard/Sidebar';
import Footer from './Dashboard/Footer';
import Main from './Dashboard/Main';
import Trade from './Dashboard/Trade';
import decode from 'jwt-decode';
import { DashboardWrapper } from '../styles/dashboard';


class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {

        const { requestAccountData, history } = this.props;

        const token = localStorage.getItem('token');
        let decoded = decode(token);
        if (decoded) {
            let userid = decoded.id;
            let encodedKey = encodeURIComponent('userid');
            let encodedValue = encodeURIComponent(userid);
            let formBody = encodedKey + "=" + encodedValue;
            requestAccountData({
                fields: formBody,
            });
        } else {
            history.push('/login');
        }
        
    };

    render() {
        console.log(this.props);
        return (
            <DashboardWrapper>
                <Header />
                <Sidebar />
                <Switch>
                    <Route path="/dashboard/home" component={(props) => <Main {...this.props} />} />
                    <Route path="/dashboard/trade" component={Trade} />
                </Switch>
                <Footer />
            </DashboardWrapper>)
    };
}

export default Dashboard;