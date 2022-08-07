import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { useUserInfoContext } from "../../context/UserInfoContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginContext } = useUserInfoContext();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("/auth/login", { email, password })
      .then((res) => {
        toast.success("login successfully");
        const token = res.data.token;
        const userInfo = res.data.userInfo;
        localStorage.setItem("token", token);
        localStorage.setItem("email", userInfo.email);
        if (userInfo.image) localStorage.setItem("image", userInfo.image);
        localStorage.setItem("fullName", userInfo.fullName);
        axios.defaults.headers.common.token = token;

        loginContext({
          email: userInfo.email,
          image: userInfo.image,
          fullName: userInfo.fullName,
        });
      })
      .catch((err) => toast.error(err.response?.data?.message || err.message));
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="images/musicLogo.png" alt="logo" />
        <div className="login">
          <form>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <button onClick={handleSubmit} disabled={!email || !password}>
              login
            </button>
          </form>
          <Link to="/SignUp">don't have account ? sign up now</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
