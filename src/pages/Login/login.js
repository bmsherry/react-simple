import React from "react";
import { Link } from "react-router-dom";
import LikeButton from 'components/LikeButton'
import "./login.scss";

const Links = () => (
  <nav>
    <Link to="/home/pageA">toHomePage</Link>
  </nav>
);

class Login extends React.Component {
  render() {
    return (
      <section className="login">
        <LikeButton />
        <Links />
        <div className="logincontainer">LoginPage</div>
      </section>
    );
  }
}

export default Login;
