import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Avatar, Icon } from 'antd';
import { withRouter } from 'react-router'
import { NavbarSetting } from '../../styles/navbar';
import { Logo } from '../../styles/form';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  render() {
    return (
      <Row type="flex" justify="space-between">
        <Col>
          <Logo src="./logo.png"></Logo>
        </Col>
        <Col>
          {this.state.loggedIn ?
            <Link to={{ pathname: `/logout` }}>
              <NavbarSetting>
                <Icon type="logout" theme="outlined" title="Logout" />
              </NavbarSetting>
            </Link>
            : null}
        </Col>
      </Row>
    );
  }
}

export default withRouter(Navbar);