import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import { Header, Logo, Toolbar, Heading } from '../../styles/header'

class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header>
                <Logo>
                    <Heading>Crypto Dashboard</Heading>
                </Logo>
                <Toolbar>
                    <div></div>
                    <Link to={{ pathname: `/logout` }}>
                        Log Out
                        </Link>
                </Toolbar>
            </Header>
        );
    }
}

export default withRouter(Navbar);