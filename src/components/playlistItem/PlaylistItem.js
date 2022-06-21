import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Playlist.scss";
import { AiFillHome } from "react-icons/ai";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { FaSistrix } from "react-icons/fa";
function PlaylistItem() {
  return (
    <div className="test">
      {" "}
      <AiFillHome />
      <NavLink to="/home" className="text-item">
        Home
      </NavLink>{" "}
      <br />
      <MdOutlinePlaylistPlay />
      <NavLink to="/playlist" className="text-item">
        Play List
      </NavLink>{" "}
      <br />
      <FaSistrix />
      <NavLink to="/SearchSong" className="text-item">
        Search Song
      </NavLink>
    </div>
  );
}

export default PlaylistItem;
