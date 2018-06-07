import React from "react";
import ReactDOM from "react-dom";
import { Route, Router } from "react-router-dom";
import App from "pages/App/Container";
import { history } from "router/location";
import "assets/css/normalize.scss";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
