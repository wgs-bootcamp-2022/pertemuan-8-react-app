/** @format */

import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";

import { createStore } from "redux";
import reducers from "./assignmentReduxJson/reducers/formReducer";
import MyForm from "./assignmentReduxJson/components/myForm";
import { composeWithDevTools } from "redux-devtools-extension";

const element = document.getElementById("root");
const root = ReactDom.createRoot(element);

// menggunakan thunk dan redux-devtools-extension
const store = createStore(reducers, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyForm />
    </Provider>
  </React.StrictMode>
);
