import {
    combineReducers
} from 'redux';
import {
    routerReducer
} from 'react-router-redux';
import {
    authReducer
} from './authReducers';

const rootReducer = combineReducers({
    auth: authReducer,
    router: routerReducer
});


export default rootReducer;