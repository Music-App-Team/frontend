import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";

function SignUp() {
  return (
    <div className="SignUp-container">
      <img src="images/musicLogo.png" alt="logo" />
      <div className="SignUp">
        <form>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="last name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <button>SignUp</button>
        </form>
        <Link to="/Login">already sign up ? log in</Link>
      </div>
    </div>
  );
}

export default SignUp;
