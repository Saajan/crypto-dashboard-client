import {
    combineReducers
} from 'redux';
import {
    routerReducer
} from 'react-router-redux';
import {
    loginReducer
} from './loginReducer';
import {
    registerReducer
} from './registerReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    router: routerReducer
});


export default rootReducer;