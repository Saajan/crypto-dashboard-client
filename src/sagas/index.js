import {
    call,
    all,
    put,
    takeLatest
} from 'redux-saga/effects';

import {
    REQUEST_LOGIN,
    REQUEST_LOGIN_SUCCESS,
    REQUEST_LOGIN_FAILURE,
    REQUEST_REGISTER,
    REQUEST_REGISTER_SUCCESS,
    REQUEST_REGISTER_FAILURE,
    REQUEST_ACCOUNT,
    REQUEST_ACCOUNT_SUCCESS,
    REQUEST_ACCOUNT_FAILURE,
} from '../actions/actionTypes';
import {
    login,
    register,
    account,
    coinCurrentPrice
} from '../api';


function* loginSaga({
    payload: {
        fields,
        callback
    }
}) {
    try {
        const {
            token,
            success,
            msg
        } = yield call(login, fields);
        if (success) {
            yield put({
                type: REQUEST_LOGIN_SUCCESS,
                payload: token,
            });
            localStorage.setItem('token', token);
            callback();
        } else {
            yield put({
                type: REQUEST_LOGIN_FAILURE,
                payload: msg
            });
            localStorage.removeItem('token');
        }
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = 'Something went wrong';
        }
        yield put({
            type: REQUEST_LOGIN_FAILURE,
            payload: message
        });
        localStorage.removeItem('token');
    }
}

function* registerSaga({
    payload: {
        fields,
        callback
    }
}) {
    //console.log(fields, callback);
    try {
        const {
            success,
            msg
        } = yield call(register, fields);
        console.log(success, msg);
        if (success) {
            yield put({
                type: REQUEST_REGISTER_SUCCESS,
                payload: msg
            });
            callback();
        } else {
            yield put({
                type: REQUEST_REGISTER_FAILURE,
                payload: msg
            });
        }
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid inputs';
                break;
            default:
                message = 'Something went wrong';
        }
        yield put({
            type: REQUEST_LOGIN_FAILURE,
            payload: message
        });
    }
}

function* getAccountSaga({
    payload: {
        fields
    }
}) {

    //console.log("accounts", fields);

    const [accountResponse, coinResponse] = yield all([
        yield call(account, fields),
        yield call(coinCurrentPrice, fields)
    ])

    const response = {
        accountUser: accountResponse,
        coinCurrentPrice: coinResponse
    };
    try {
        yield put({
            type: REQUEST_ACCOUNT_SUCCESS,
            payload: response
        })
    } catch (error) {
        yield put({
            type: REQUEST_ACCOUNT_FAILURE,
            error
        })
    }
}

export default function* mySaga() {
    yield takeLatest(REQUEST_LOGIN, loginSaga);
    yield takeLatest(REQUEST_REGISTER, registerSaga);
    yield takeLatest(REQUEST_ACCOUNT, getAccountSaga);
}