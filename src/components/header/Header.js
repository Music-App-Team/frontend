import React from "react";
import "./Header.scss";
import { FaUserCircle } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import { useEffect } from "react";

function Header() {
  return (
    <div className="header">
      {" "}
      <img id="logo" src="Group 1.png" alt="Logo" />
      <GiMusicalNotes id="music-notes" />
      <div className="main">
        <FaUserCircle id="profil-image" />
        <h3 className="action-header">Sing up</h3>
        <h3 className="action-header">Log in</h3>
      </div>
    </div>
  );
}

export default Header;
