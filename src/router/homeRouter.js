import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import pageA from "pages/Home/PageA";
import pageB from "pages/Home/PageB";

const Routes = () => (
  <Switch>
    <Route exact path="/home/pageA" component={pageA} />
    <Route path="/home/pageB" component={pageB} />
    <Redirect from="*" to="/home/pageA" />
  </Switch>
);

export default Routes;
