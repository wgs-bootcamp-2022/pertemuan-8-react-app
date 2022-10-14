/** @format */

import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import { applyMiddleware, createStore } from "redux";
import reducers from "./assignmentReduxJson/reducers/formReducer";
import MyForm from "./assignmentReduxJson/components/AddUser"
import { composeWithDevTools } from "redux-devtools-extension"
import App from "./assignmentReduxJson/components/App"
import { BrowserRouter } from "react-router-dom";

const element = document.getElementById("root");
const root = ReactDom.createRoot(element);

// menggunakan thunk dan redux-devtools-extension
const store = createStore(
  reducers,
  composeWithDevTools()
);

root.render(
//   <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
//   </React.StrictMode>
);
