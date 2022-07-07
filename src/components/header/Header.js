import React from "react";
import "./Header.scss";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  function handleSignout() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  const isLogin = localStorage.getItem("token");

  return (
    <div className="header">
      <img id="logo" src="/images/Logo.png" alt="Logo" />
      <div className="main">
        <FaUserCircle id="profil-image" />
        {isLogin ? (
          <button onClick={handleSignout}>Sign out</button>
        ) : (
          <div>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>sign up</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
