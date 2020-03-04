import {
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL
} from "./constants";

const initialState = {
    signingUp: false,
    error: null,
};

//sign up state reducers
export function signUpReducer(state=initialState, action) {
    switch(action.type) {
        case SIGN_UP:
            return Object.assign({}, state, {
                signingUp: true,
                error: null
            });

        case SIGN_UP_SUCCESS:
            return Object.assign({}, state, {
                signingUp: false,
                error: null
            });

        case SIGN_UP_FAIL:
            alert(action.error);
            return Object.assign({}, state, {
                signingUp: false,
                error: action.error
            });

        default:
            return state;
    }
}
