import React, { createContext, useContext, useState } from "react";

export const UserInfoContext = createContext();

export const UserInfoContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [userInfo, setUserInfo] = useState({
    email: localStorage.getItem("email"),
    image: localStorage.getItem("image"),
  });

  function loginContext(userInfo) {
    setIsAuthenticated(true);
    setUserInfo(userInfo);
  }

  function signoutContext() {
    setIsAuthenticated(false);
    setUserInfo({});
  }

  function setImageProfile(image) {
    const newUserInfo = { ...userInfo };
    newUserInfo.image = image;
    setUserInfo(newUserInfo);
    localStorage.setItem("image", image);
  }

  return (
    <UserInfoContext.Provider
      value={{
        isAuthenticated,
        userInfo,
        loginContext,
        signoutContext,
        setImageProfile,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfoContext = () => {
  return useContext(UserInfoContext);
};
