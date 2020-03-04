import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from './constants';

// initial state of user
const initialUserState = {
    fetchingUser: true,
    logingIn: false,
    authenticated: false,
    error: null,
    _id: null,
    name: null,
    email: null,
    avatarUrl: null,
    role: null,
};

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        //set loginIn to be true
        case USER_LOGIN:
            return Object.assign({}, state, {
                logingIn: true,
                name: null,
                error: null,
                avatarUrl: null,
                profile: {}
            });

        // set user name and avatar
        case USER_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                logingIn: false,
                name: action.data.name,
                authenticated: true,
                avatarUrl: action.data.avatarUrl,
                error: null
            });

        // set loginIn to be false
        case USER_LOGIN_FAIL:
            console.log("login fail")
            console.log(action.error)
            return Object.assign({}, state, {
                logingIn: false,
                error: action.error
            });

        // clean user states
        case USER_LOGOUT:
            return initialUserState;

        default:
            return state;
    }
};
