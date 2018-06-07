import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "pages/Login/login";
import Home from "pages/Home";

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route path="/home" component={Home} />
    <Redirect from="*" to="/login" />
  </Switch>
);

export default Routes;
