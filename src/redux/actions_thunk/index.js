/** @format */

import _ from "lodash";
import jsonPlaceholder from "../../data/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  console.log(response);
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  console.log(response);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const myForm = (data) => async (dispatch) => {
  // const response = await jsonPlaceholder.get('/')
  dispatch({ type: "SUBMIT_FORM", payload: data});
}