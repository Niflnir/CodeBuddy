import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactTipScreen from "./screens/ReactTipsScreen";
import HomeScreen from "./screens/HomeScreen";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/Home" element={<HomeScreen />} />
        <Route path="/reacttips" element={<ReactTipScreen />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
