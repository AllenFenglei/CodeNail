import {
    SEARCHING,
    SEARCH_SUCCESS,
    SEARCH_FAIL
} from './constants';

const initialSearchState = {
    post: null,    
    error: null
};
// change search states
export const searchPostReducer = (state = initialSearchState, action) => {
    switch (action.type) {
        case SEARCHING:
            return Object.assign({}, state, {
                post: null,    
                error: null
            });

        case SEARCH_SUCCESS:
            console.log("search success");
            //console.log(action.post)
            return Object.assign({}, state, {
                post: action.post,                
                error: null
            });

        case SEARCH_FAIL:
            console.log("search fail")
            console.log(action.error)
            return Object.assign({}, state, {
                error: action.error
            });       

        default:
            return state;
    }
};