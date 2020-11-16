import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import {Provider} from 'react-redux'
import store from './redux/reducer'



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <Router>
      <App />
    </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
