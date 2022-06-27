import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { FaSistrix } from "react-icons/fa";
import "./sidebar.scss";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <AiFillHome />
          <NavLink to="/app/dashboard" className="text-item">
            Dashboard
          </NavLink>
        </li>
        <li>
          <MdOutlinePlaylistPlay />
          <NavLink to="/app/playlists" className="text-item">
            Play List
          </NavLink>
        </li>
        <li>
          <FaSistrix />
          <NavLink to="/app/search" className="text-item">
            Search Song
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
