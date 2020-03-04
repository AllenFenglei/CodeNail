import {searchDetailApi, addCommentApi} from './api'
import {
    GET_DETAIL,
    GET_DETAIL_SUCCESS,
    GET_DETAIL_FAIL,
    ADDING_COMMENT,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAIL
} from './constants';
// get post by id and change dispatch
export function searchDetail(id) {
    return (dispatch, getState) => {
        dispatch({ type:  GET_DETAIL});
        console.log('in search detail')
        console.log(id);
        searchDetailApi(id)
        .then((data) => dispatch({
            type: GET_DETAIL_SUCCESS,
            post: data
        }))
        .catch(err => dispatch({
            type: GET_DETAIL_FAIL,
            error: err
        }));
    };
}
// add comment and change dispatch
export function addComment(content, toPost, user_name) {
    return (dispatch, getState) => {
        dispatch({ type:  ADDING_COMMENT});
        console.log('in add comment')
        console.log(content);
        console.log(toPost);
        console.log(user_name);
        addCommentApi(content, toPost, user_name)
        .then((data) => dispatch({
            type: ADD_COMMENT_SUCCESS,
            post: data
        }))
        .catch(err => dispatch({
            type: ADD_COMMENT_FAIL,
            error: err
        }));
    };
}