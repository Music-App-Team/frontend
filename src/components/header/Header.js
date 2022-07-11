import React from "react";
import "./Header.scss";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserInfoContext } from "../../context/UserInfoContext";

function Header() {
  const { signoutContext, isAuthenticated, userInfo } = useUserInfoContext();

  function handleSignout() {
    localStorage.removeItem("token");
    signoutContext();
  }

  return (
    <div className="header">
      <img id="logo" src="/images/Logo.png" alt="Logo" />
      <div className="main">
        <Link to="/app/profile">{!userInfo.image ? ( <FaUserCircle id="profil-image" />
          ) : (
            <img
              className="profileImage"
              src={userInfo.image}
              alt={userInfo.email}
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
