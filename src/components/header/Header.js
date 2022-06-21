import React from "react";
import "./Header.scss";
import { FaUserCircle } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";

function Header() {
  const [button, setButton] = useState(false);
  return (
    <div
      className="header"
      // style={{ flexDirection: button ? "column" : undefined }}
    >
      <img id="logo" src="images/musicLogo.png" alt="Logo" />
      {/* <GiMusicalNotes id="music-notes" /> */}
      <div className="main">
        {/* <div className="button-responsive" onClick={() => setButton(!button)}>
          <AiOutlineMenu />
        </div> */}
        <FaUserCircle id="profil-image" />
        <h3 className="action-header">Sing up</h3>
        <h3 className="action-header">Log in</h3>
      </div>
    </div>
  );
}

export default Header;
