import React from "react";
import ReactDom from "react-dom/client"
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import reducers from "./redux/reducers_thunk";
import App from "./redux/components_thunk/app"

const element = document.getElementById("root")
const root = ReactDom.createRoot(element)
const store = createStore(reducers, applyMiddleware(thunk))

root.render(
	<Provider store={store}>
		<App />
	</Provider>
)