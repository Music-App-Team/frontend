import React from "react";
import "./Header.scss";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  function handleSignout() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div className="header">
      <img id="logo" src="/images/Logo.png" alt="Logo" />
      <div className="main">
        <FaUserCircle id="profile-image" />
        <button onClick={handleSignout}>Sign out</button>
      </div>
    </div>
  );
}

export default Header;
