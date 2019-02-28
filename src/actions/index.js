import { jsonPlaceHolder, jsonPlaceHolderPOST } from './../api/jsonplaceholder'
import { SET_POSTS_DATA, REQUEST_POSTS,  CREATE_POST } from '../constants/constats';

export const loadPosts = () => dispatch => {
    jsonPlaceHolder.get("/posts")
        .then(response =>
            dispatch({
                type: SET_POSTS_DATA,
                payload: response.data
            }))
    dispatch({ type: REQUEST_POSTS })
}

export const newPost=(postData)=>async dispatch=>{
       await jsonPlaceHolderPOST.post('/posts',postData)
       .then(response =>
        dispatch({
            type: CREATE_POST,
            payload: response.data,
        }))
        
        


}

