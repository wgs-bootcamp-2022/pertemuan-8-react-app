/** @format */

import { combineReducers } from "redux";

import postsReducer from "../reducers_thunk/postsReducers";
import usersReducer from "../reducers_thunk/usersReducer";


export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});
