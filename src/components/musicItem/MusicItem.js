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

function MusicItem({ music }) {
  const audio = useRef(new Audio(music.link));
  const [playing, setPlaying] = useState(false);
  const { own, playlistId, loadPlaylistData } = usePlaylistContext();

  useEffect(() => {
    audio.current.onplaying = () => {
      setPlaying(true);
    };
    audio.current.onpause = () => {
      setPlaying(false);
    };
  });

  const handlePlay = () => {
    if (playing) audio.current.pause();
    else audio.current.play();
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
          {playing ? (
            <AiFillPauseCircle onClick={handlePlay} />
          ) : (
            <AiFillPlayCircle onClick={handlePlay} />
          )}
          {own && <AiFillMinusCircle onClick={handleRemove} />}
        </span>
        <span class="list-group-item">{music.artist}</span>
        <span class="list-group-item">{music.album}</span>
        <span class="list-group-item">{music.lang}</span>
        <span class="list-group-item">
          <AiOutlineDownload onClick={handleDownload} />
        </span>
          {playing && <img height={40} src={playIcon} />}
      </div>
    </div>
  );
}

export default MusicItem;
