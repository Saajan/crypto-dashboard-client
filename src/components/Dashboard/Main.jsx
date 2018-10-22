import React, { Component } from 'react';

import { Main, Card, MainWrapper } from '../../styles/dashboard'

class MainComponent extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        console.log("main",this.props);
    };


    render() {
        return (
            <Main>
            <h2>Dashboard</h2>
            <MainWrapper>

            </MainWrapper>
        </Main>)
    }
}

export default MainComponent;
