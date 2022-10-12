/** @format */

import { combineReducers } from "redux";

import counter from "./counter";
import form from "./formReducer";


export default combineReducers({
  counter,
  form,
});
