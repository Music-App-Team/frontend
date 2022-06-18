import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

function Login() {
  return (
    <div className="login-container">
      <img src="images/musicLogo.png" alt="logo" />
      <div className="login">
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>login</button>
        </form>
        <Link to="/SignUp">don't have account ? sign up now</Link>
      </div>
    </div>
  );
}

export default Login;
