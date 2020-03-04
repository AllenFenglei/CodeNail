import {
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL
} from "./constants.js";

import {
    signUpAPI
} from "./api";

export function signUp(name, password1, password2) {
    return (dispatch, getState) => {
        dispatch({ type: SIGN_UP });

        // call sign up api
        signUpAPI(name, password1, password2)
        .then(() => {
            // jump to index page after sign up
            window.location.href="/";
            alert("Sign up succeed!");
            dispatch({type: SIGN_UP_SUCCESS});
        })
        .catch(err => dispatch({
            type: SIGN_UP_FAIL,
            error: err
        }));
        
    };
}
