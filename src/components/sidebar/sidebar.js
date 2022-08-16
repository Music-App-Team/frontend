import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { FaSistrix } from "react-icons/fa";
import "./sidebar.scss";
export default function Sidebar({isSidebarOpen,toggleSidebar}) {

  return (
    <div className={`sidebar ${isSidebarOpen ? "sidebarOpen":""}`}>
      <ul>
        <li>
          <AiFillHome />
          <NavLink to="/app/dashboard" className="text-item" onClick={toggleSidebar}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <MdOutlinePlaylistPlay />
          <NavLink to="/app/playlists" className="text-item" onClick={toggleSidebar}>
            Play List
          </NavLink>
        </li>
        <li>
          <FaSistrix />
          <NavLink to="/app/search" className="text-item" onClick={toggleSidebar}>
            Search
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
