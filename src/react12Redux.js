/** @format */

import React, { PureComponent } from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Counter from "./redux/components/counter";
import reducers from "./redux/reducers";

const element = document.getElementById("root");
const root = ReactDom.createRoot(element);

class App extends PureComponent {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div>
          <Counter />
        </div>
      </Provider>
    );
  }
}
root.render(<App />);
