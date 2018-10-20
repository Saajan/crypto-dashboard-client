import { combineReducers } from 'redux';

const rootReducer = combineReducers({ login: (s = []) => s });

export default rootReducer;