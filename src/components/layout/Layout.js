import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/sidebar";
import "./Layout.scss";



function layout({children}) {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
