import {
    FETCH_POST_START,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAIL,
    FETCH_COLLECTION_START,
    FETCH_COLLECTION_SUCCESS,
    FETCH_COLLECTION_FAIL
} from "./constants.js";

import {
    fetchPostAPI,
    fetchCollectionAPI
} from "./api";

// fetch user post from backend
export function fetchUserPost(username) {
    return (dispatch, getState) => {
        dispatch({ type: FETCH_POST_START });

        fetchPostAPI(username)
        .then(data => dispatch(
            {type: FETCH_POST_SUCCESS, posts: data}
        ))
        .catch(err => dispatch({
            type: FETCH_POST_FAIL
        }));
        
    };
}

// fetch user collection from backend
export function fetchUserCollection(username) {
    return (dispatch, getState) => {
        dispatch({ type: FETCH_COLLECTION_START });

        fetchCollectionAPI(username)
        .then(data => dispatch(
            {type: FETCH_COLLECTION_SUCCESS, collection: data}
        ))
        .catch(err => dispatch({
            type: FETCH_COLLECTION_FAIL
        }));
        
    };
}
