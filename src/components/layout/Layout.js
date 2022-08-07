import React, { useState } from "react";
import Header from "../header/Header";
import Player from "../player/player";
import Sidebar from "../sidebar/sidebar";
import "./Layout.scss";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  function toggleSidebar(){
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className={`layout ${!isSidebarOpen ? 'layoutExpanded':''}`}>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <Header toggleSidebar={toggleSidebar}/>
      <main onClick={()=>setIsSidebarOpen(false)}>{children}</main>
      <Player />
    </div>
  );
}

export default Layout;
