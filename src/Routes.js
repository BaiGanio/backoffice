import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import NotFound from "./components/NotFound/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/backoffice">
        <Home />
      </Route>
      <Route exact path="/backoffice/login">
        <Login />
      </Route>
      {/* Finally, catch all unmatched routes */}
        <Route>
            <NotFound />
        </Route>
    </Switch>
  );
}