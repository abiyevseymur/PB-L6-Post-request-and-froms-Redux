import { jsonPlaceHolder, jsonPlaceHolderPOST } from './../api/jsonplaceholder'
import { SET_POSTS_DATA, REQUEST_POSTS, GET_POST_DETAILS, CREATE_POST } from '../constants/constats';

export const loadPosts = () => dispatch => {
    jsonPlaceHolder.get("/posts")
        .then(response =>
            dispatch({
                type: SET_POSTS_DATA,
                payload: response.data
            }))
    dispatch({ type: REQUEST_POSTS })
}

export const getPostId = (id) => dispatch => {

    if (id)
        jsonPlaceHolder.get(`/posts/${id}`)
            .then(response =>
                dispatch({
                    type: GET_POST_DETAILS,
                    payload: response.data
                }))

}
export const newPost=(postData)=>async dispatch=>{
       await jsonPlaceHolderPOST.post('/posts',postData)
       .then(response =>
        dispatch({
            type: CREATE_POST,
            payload: response.data,
        }))
        
        


}

