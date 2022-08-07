import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import {
  AiFillPlayCircle,
  AiFillMinusCircle,
  AiFillPauseCircle,
  AiOutlineDownload,
} from "react-icons/ai";
import { toast } from "react-toastify";
import { usePlaylistContext } from "../../context/PlaylistContext";
import { saveAs } from "file-saver";
import playIcon from "../../assets/play.gif";
import "./musicItem.scss";
import { usePlayerContext } from "../../context/PlayerContext";

function MusicItem({ music }) {
  const {play,isPlaying,pause,currentLink} = usePlayerContext()
  const { own, playlistId, loadPlaylistData } = usePlaylistContext();


  const handlePlay = () => {
    if (isPlaying && currentLink===music.link) pause();
    else play(music);
  };

  const handleRemove = () => {
    axios
      .delete(`/playlist/removeSong/${playlistId}/${music._id}`)
      .then((res) => {
        loadPlaylistData();
        toast.success("removed successfully");
      })
      .catch((err) => toast.error(err.response?.data?.message || err.message));
  };

  const handleDownload = () => {
    saveAs(music.link, `${music.name}.mp3`);
  };

  return (
    <div className="musicItem">
      <div class="list-group list-group-horizontal ">
        <span class="list-group-item">{music.name}</span>
        <span class="list-group-item">
          {isPlaying && currentLink===music.link ? (
            <AiFillPauseCircle onClick={handlePlay} />
          ) : (
            <AiFillPlayCircle onClick={handlePlay} />
          )}
          {own && <AiFillMinusCircle onClick={handleRemove} />}
        </span>
        <span class="list-group-item">{music.artist}</span>
        <span class="list-group-item">{music.album}</span>
        <span class="list-group-item hiddenOnPhone">{music.lang}</span>
        <span class="list-group-item smallOnPhone">
          <AiOutlineDownload onClick={handleDownload} />
        </span>
          {isPlaying && currentLink===music.link && <img height={45} src={playIcon} />}
      </div>
    </div>
  );
}

export default MusicItem;
