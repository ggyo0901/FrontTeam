import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import createConfigure from "./store/store";
import { Provider } from "react-redux";
const store = createConfigure();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
