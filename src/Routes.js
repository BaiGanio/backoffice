import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./containers/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Blog from "./pages/Blog/Blog";
import Courses from "./pages/Courses/Courses";
import Characters from "./pages/Characters/Characters";
import CharactersMUI from "./pages/CharactersMUI/CharactersMUI";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

export default function Routes() {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/blog" component={Blog} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/characters" component={Characters} /> 
      <Route path="/characters-mui" component={CharactersMUI} />
      <Route path="/courses" component={Courses} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route><NotFound /></Route>
    </Switch>
  );
 }