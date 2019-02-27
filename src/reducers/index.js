import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { postDetailsReducer } from "./postDetailsReducer";


export const rootReducer = combineReducers({
    posts:postReducer,
    postDetails:postDetailsReducer,
})