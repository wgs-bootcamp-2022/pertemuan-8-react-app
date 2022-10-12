/** @format */

import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";

import { Form, Field } from "react-final-form";
import Styles from "./StyleForm";

import { createStore } from "redux";
import reducers from "./redux/reducers";
import { myForm } from "./redux/actions/myForm";
import { composeWithDevTools } from "redux-devtools-extension";
import { useDispatch } from "react-redux";

const element = document.getElementById("root");
const root = ReactDom.createRoot(element);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__() &&
    composeWithDevTools()
);

const MyForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
    dispatch(myForm(values));
  };

  return (
    <Styles>
      <h2 align="center">Employee Form</h2>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                placeholder="First Name"
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>Employed</label>
              <Field name="employed" component="input" type="checkbox" />
            </div>
            <div>
              <label>Education</label>
              <Field name="education" component="select">
                <option />
                <option> High School</option>
                <option> Bachelor </option>
                <option> Post Graduate </option>
              </Field>
            </div>
            <div>
              <label>Expertise</label>
              <div>
                <label>
                  <Field
                    name="expertise"
                    component="input"
                    type="checkbox"
                    value="html"
                  />{" "}
                  HTML
                </label>
                <label>
                  <Field
                    name="expertise"
                    component="input"
                    type="checkbox"
                    value="css"
                  />{" "}
                  CSS
                </label>
                <label>
                  <Field
                    name="expertise"
                    component="input"
                    type="checkbox"
                    value="javascript"
                  />{" "}
                  Javascript
                </label>
                <label>
                  <Field
                    name="expertise"
                    component="input"
                    type="checkbox"
                    value="nodejs"
                  />{" "}
                  NodeJS
                </label>
                <label>
                  <Field
                    name="expertise"
                    component="input"
                    type="checkbox"
                    value="reactjs"
                  />{" "}
                  ReactJS
                </label>
              </div>
            </div>
            <div>
              <label>Preferred Technology</label>
              <div>
                <label>
                  <Field
                    name="technology"
                    component="input"
                    type="radio"
                    value="frontEnd"
                  />{" "}
                  Front End
                </label>
                <label>
                  <Field
                    name="technology"
                    component="input"
                    type="radio"
                    value="backEnd"
                  />{" "}
                  Back End
                </label>
                <label>
                  <Field
                    name="technology"
                    component="input"
                    type="radio"
                    value="fullStack"
                  />{" "}
                  Full Stack
                </label>
              </div>
            </div>
            <div>
              <label>Notes</label>
              <Field name="notes" component="textarea" placeholder="Notes" />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}>
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Styles>
  );
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyForm />
    </Provider>
  </React.StrictMode>
);
