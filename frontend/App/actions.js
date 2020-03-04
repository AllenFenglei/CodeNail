import _ from 'lodash';
import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
} from './constants';

import {
  signOut,
  loginApi,
} from './api';

// login action
export function login(name, password) {
    return (dispatch, getState) => {
        dispatch({ type: USER_LOGIN });
        loginApi(name, password)
        .then((data) => dispatch({
            type: USER_LOGIN_SUCCESS,
            data: data
        }))
        .catch(err => dispatch({
            type: USER_LOGIN_FAIL,
            error: err
        }));
    };
}

// logout action
export function logout() {
    return (dispatch, getState) => {
        dispatch({ type: USER_LOGOUT });
    };
}


