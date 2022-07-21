import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/sidebar";
import "./Layout.scss";

function layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default layout;
