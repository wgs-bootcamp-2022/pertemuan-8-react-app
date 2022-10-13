// 
export const myForm = (data) => async (dispatch) => {
    dispatch({ type: "SUBMIT_FORM", payload: data});
  }