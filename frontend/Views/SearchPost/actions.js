import {searchApi} from './api'
import {
    SEARCHING,
    SEARCH_SUCCESS,
    SEARCH_FAIL
} from './constants';
//send search request
export function search(content) {
    return (dispatch, getState) => {
        dispatch({ type:  SEARCHING});
        searchApi(content)
        .then((data) => dispatch({
            type: SEARCH_SUCCESS,
            post: data
        }))
        .catch(err => dispatch({
            type: SEARCH_FAIL,
            error: err
        }));
    };
}