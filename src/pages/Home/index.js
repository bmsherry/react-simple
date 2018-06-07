import React from "react";
import { Link } from "react-router-dom";
import Routes from "router/homeRouter";
import logo from "assets/image/logo.svg";
import './home.scss'

const Links = () => (
  <nav className="homepagenav">
    <Link to="/home/pageA" className="homepagenavlink">topageA</Link>
    <Link to="/home/pageB" className="homepagenavlink">topageB</Link>
  </nav>
);

class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Links />
		{Routes()}
		<img src={logo} alt="logo" />    
      </div>
    );
  }
}

export default Home;
