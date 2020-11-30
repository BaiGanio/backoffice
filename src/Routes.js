import React from "react";
import { Route, Switch } from "react-router-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import NotFound from "./components/NotFound/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'}>
        <Home />
      </Route>
      <Route exact path={process.env.PUBLIC_URL + '/login'}>
        <Login />
      </Route>
      {/* Finally, catch all unmatched routes */}
        <Route>
            <NotFound />
        </Route>
    </Switch>
  );
}