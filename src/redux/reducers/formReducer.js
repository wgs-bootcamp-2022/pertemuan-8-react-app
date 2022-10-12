/** @format */
import { SUBMIT_FORM } from "../actions/index";
const formReducer = (state = [], action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return action.payload;
    default:
      return state;
  }
};
export default formReducer