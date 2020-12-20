import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import NotFound from "./components/NotFound/NotFound";

export default function Routes() {

  return (
    <Switch>
      <Route exact path="/backoffice" component={Home} />
      {/* <Route path="/login" component={Login} />
      <Route path="/signin" component={SignIn} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/blog" component={Blog} />
      <Route path="/characters" component={CharactersList} /> */}
      {/* <Route path="/courses" component={CoursesList} /> */}
      {/* <Route path="/characters-mui" component={CharactersListMUI} /> */}
      <Route><NotFound /></Route>
    </Switch>
  );
 }