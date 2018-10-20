

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { React } from 'react';
import LoginForm from '../components/LoginForm';
import { requestLogin } from '../actions/actionCreator';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            requestLogin,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);