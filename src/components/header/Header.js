import React from "react";
import "./Header.scss";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserInfoContext } from "../../context/UserInfoContext";

function Header({ toggleSidebar }) {
  const { signoutContext, isAuthenticated, userInfo } = useUserInfoContext();

  function handleSignout() {
    localStorage.clear();
    signoutContext();
  }

  return (
    <div className="header">
      <FaBars className="header__menu" onClick={toggleSidebar} />
      <Link to={"/"} className="header__logo">
        <img id="logo" src="/images/Logo.png" alt="Logo" />
      </Link>

      <div className="main">
        <Link to="/app/profile">
          {!userInfo.image ? (
            <FaUserCircle id="profil-image" />
          ) : (
            <div
              className="profileImage"
              style={{ backgroundImage: `url(${userInfo.image})` }}
            />
          )}
        </Link>
        {isAuthenticated ? (
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
