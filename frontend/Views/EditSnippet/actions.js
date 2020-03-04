import {
    POST_SNIPPET,
    POST_SUCCESS,
    POST_FAIL
} from "./constants.js";

import {
    postAPI
} from "./api";

export function post_snippet(title, descriptions, keywords, language, code, user) {
    //for post new snippet
    //console.log("enter post_snippet");

    return (dispatch, getState) => {
        dispatch({ type: POST_SNIPPET });
        console.log(user);
        postAPI(title, descriptions, keywords, language, code, user)
        .then((id) => {
            window.location.href = "/search_detail/" + id;  //go to the page of the snippet
            dispatch({type: POST_SUCCESS});
        })
        .catch(err => dispatch({
            type: POST_FAIL,
            error: err
        }));
        
    };
}
