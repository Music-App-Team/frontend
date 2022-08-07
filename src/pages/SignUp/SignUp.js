import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.scss";
import { toast } from "react-toastify";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword)
      return toast.error("fill all fields");
    else if (password !== confirmPassword)
      return toast.error("password and confirm password must be same");

    axios
      .post("/auth/signup", {
        firstName,
        lastName,
        password,
        email,
      })
      .then((res) => {
        toast.success("sign up successfully");
        navigate("/login");
      })
      .catch((err) => toast.error(err.response?.data?.message || err.message));
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img src="images/musicLogo.png" alt="logo" />
        <div className="SignUp">
          <form>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="name"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="last name"
            />
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
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="confirm password"
            />
            <button
              onClick={handleSubmit}
              disabled={
                !firstName ||
                !lastName ||
                !email ||
                !password ||
                !confirmPassword
              }
            >
              SignUp
            </button>
          </form>
          <Link to="/login">already sign up ? log in</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
