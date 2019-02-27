
import { GET_POST_DETAILS, REQUEST_POSTS } from "../constants/constats";

const intialState = {
    posts: null,
    isLoading: false
}


export const postDetailsReducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_POST_DETAILS:
            return {
                ...state,
                posts: action.payload,
                isLoading:false
            }
        case REQUEST_POSTS:
            return {
                ...state,
                isLoading: true
            }

        default: return state
    }
}