import React, { Component } from "react";
import Routes from "router/rootRouter";
import "./Container.css";

class Container extends Component {
  render() {
    return (
      <div className="App">
        {Routes()}
      </div>
    );
  }
}

export default Container;
