import React from "react";
import "./playlistItem.scss";
import { Link } from "react-router-dom";

function PlaylistItem({ data }) {
  return (
    <div div className="playlistItem">
      <h1>title:{data.title}</h1>
      <span>author:{data.user}</span>
      <Link to={`/app/playlist/${data._id}`}>
        <button>View</button>
      </Link>
    </div>
  );
}

export default PlaylistItem;
