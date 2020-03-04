import {
    FETCH_POST_START,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAIL,
    FETCH_COLLECTION_START,
    FETCH_COLLECTION_SUCCESS,
    FETCH_COLLECTION_FAIL
} from "./constants.js";


const initialState = {
    fetchingPost: true,
    posts: {},
    postError: null,

    fetchingCollection: true,
    collection: {},
    collectionError: null
};

export function userProfileReducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_POST_START:
            return Object.assign({}, state, {
                fetchingPost: true,
                error: null
            });

        case FETCH_POST_SUCCESS:
            return Object.assign({}, state, {
                fetchingPost: false,
                posts: action.posts,
                error: null
            });

        case FETCH_POST_FAIL:
            return Object.assign({}, state, {
                fetchingPost: false,
                error: 'Unable to fetch user posts. Please check out for correct username.',
            });

        case FETCH_COLLECTION_START:
            return Object.assign({}, state, {
                fetchingCollection: true,
                collectionError: null
            });

        case FETCH_COLLECTION_SUCCESS:
            return Object.assign({}, state, {
                fetchingCollection: false,
                collection: action.collection,
                collectionError: null
            });

        case FETCH_COLLECTION_FAIL:
            return Object.assign({}, state, {
                fetchingCollection: false,
                collectionError: 'Unable to fetch user collection. Please check out for correct username.',
            });

        default:
            return state;
    }
}
