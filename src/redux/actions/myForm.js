export const myForm = (data) => async (dispatch) => {
    // const response = await jsonPlaceholder.get('/')
    dispatch({ type: "SUBMIT_FORM", payload: data});
  }