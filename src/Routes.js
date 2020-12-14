import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import NotFound from "./components/NotFound/NotFound";

export default function Routes() {
  return (

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route>
        <NotFound />
      </Route>
    </Switch>

  );
 }