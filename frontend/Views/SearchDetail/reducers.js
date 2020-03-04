import {
    GET_DETAIL,
    GET_DETAIL_SUCCESS,
    GET_DETAIL_FAIL,
    ADDING_COMMENT,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAIL
} from './constants';

const initialDetailState = {
    post: null,    
    error: null
};
// change state after getting detail of posts
export const searchDetailReducer = (state = initialDetailState, action) => {
    switch (action.type) {
        case GET_DETAIL:
            return Object.assign({}, state, {
                post: null,    
                error: null
            });

        case GET_DETAIL_SUCCESS:
            console.log("get detail success");
            //console.log(action.post)
            return Object.assign({}, state, {
                post: action.post,                
                error: null
            });

        case GET_DETAIL_FAIL:
            console.log("get detail fail")
            console.log(action.error)
            return Object.assign({}, state, {
                error: action.error
            });
        case ADDING_COMMENT:
            return Object.assign({}, state, {
                post: null,    
                error: null
            });

        case ADD_COMMENT_SUCCESS:
            console.log("add comment success");
            //console.log(action.post)
            return Object.assign({}, state, {
                post: action.post,                
                error: null
            });

        case ADD_COMMENT_FAIL:
            console.log("add comment fail")
            console.log(action.error)
            return Object.assign({}, state, {
                error: action.error
            });    


        default:
            return state;
    }
};