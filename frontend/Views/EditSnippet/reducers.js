import {
    POST_SNIPPET,
    POST_SUCCESS,
    POST_FAIL
} from "./constants";

const initialState = {
    posting: false,
    error: null,
};

//state change reducers
export function postReducer(state=initialState, action) {
    switch(action.type) {
        case POST_SNIPPET:
            console.log("post");
            return Object.assign({}, state, {
                posting: true,
                error: null
            });

        case POST_SUCCESS:
            console.log("post_success");
            return Object.assign({}, state, {
                posting: false,
                error: null
            });

        case POST_FAIL:
            console.log("post_fail");
            return Object.assign({}, state, {
                posting: false,
                error: action.error
            });

        default:
            return state;
    }
}
