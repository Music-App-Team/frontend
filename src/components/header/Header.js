import React from "react";
import "./Header.scss";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

function Header() {
  const [button, setButton] = useState(false);
  return (
    <div className="header">
      <img id="logo" src="/images/Logo.png" alt="Logo" />
      <div className="main">
        <FaUserCircle id="profil-image" />
        <h3 className="action-header">Sing up</h3>
        <h3 className="action-header">Log in</h3>
      </div>
    </div>
  );
}

export default Header;
