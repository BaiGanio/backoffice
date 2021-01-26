import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import { ServerCacheProvider } from "./server-cache/provider";

ReactDOM.render(
  <Provider store={store}>
    <ServerCacheProvider>
      <Router basename="/backoffice">
        <App />
      </Router>
    </ServerCacheProvider>
  </Provider>,
  document.getElementById("root")
);
