import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';
import { requestAccountData } from '../actions/actionCreator';

const mapStateToProps = state => ({
    register : state.register
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            requestAccountData,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);