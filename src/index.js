import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./styles/main.scss";
import App from "./App";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop.jsx";

import { store, persistor } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <ScrollToTop />
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);
