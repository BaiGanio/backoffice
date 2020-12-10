import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import NotFound from "./components/NotFound/NotFound";

export default function Routes() {
  // const history = createHistory({
  //   basename: process.env.PUBLIC_URL,
  // });
  // const store = configureStore({ history });
  return (
    // <Provider store={store}> From React Redux
      // <BrowserRouter basename={process.env.PUBLIC_URL}>
       
      // </BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route>
         <NotFound />
     </Route>
    </Switch>
    // </Provider>
  );
//   return (
//     <Switch>
//       <Route exact path={"/"}>
//         <Home />
//       </Route>
//       <Route exact path="/login">
//         <Login />
//       </Route>
//       {/* Finally, catch all unmatched routes */}
//         <Route>
//             <NotFound />
//         </Route>
//     </Switch>
//   );
 }