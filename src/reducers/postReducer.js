import { SET_POSTS_DATA, REQUEST_POSTS, CREATE_POST } from "../constants/constats";

const intialState = {
    posts: null,
    isLoading: true
}


export const postReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_POSTS_DATA:
            return {
                ...state,
                posts: action.payload,
                isLoading: false
            }

        case CREATE_POST:
            return {
                ...state,
                posts:[...state.posts,action.payload],
                isLoading: false
            }
        case REQUEST_POSTS:
            return {
                ...state,
                isLoading: true
            }
        default: return state
    }
}