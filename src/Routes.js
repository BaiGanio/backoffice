import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import NotFound from "./components/NotFound/NotFound";

export default function Routes() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
    <Route render = {({ location }) => (
     <Switch location = { location }>
        <Route exact path = '/' component = { Home } />
        <Route exact path = '/Login/' component = { Login } />
        <Route component = { NotFound }/>
    </Switch>
     )} />
  </HashRouter>
    // <Switch>
    //   <Route exact path={process.env.PUBLIC_URL + '/'}>
    //     <Home />
    //   </Route>
    //   <Route exact path={process.env.PUBLIC_URL + '/login'}>
    //     <Login />
    //   </Route>
    //   {/* Finally, catch all unmatched routes */}
    //     <Route>
    //         <NotFound />
    //     </Route>
    // </Switch>
  );
}