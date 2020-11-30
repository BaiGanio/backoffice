import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import NotFound from "./components/NotFound/NotFound";

export default function Routes() {
  return (
     <HashRouter basename='/'>
    <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      {/* Finally, catch all unmatched routes */}
        <Route>
            <NotFound />
        </Route>
    </HashRouter>
  );
}