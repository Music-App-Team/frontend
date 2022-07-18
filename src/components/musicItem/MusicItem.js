import axios from 'axios';
import React, { useEffect,useState, useRef } from 'react'
import { AiFillPlayCircle, AiFillMinusCircle, AiFillPauseCircle } from "react-icons/ai";
import { toast } from 'react-toastify';
import { usePlaylistContext } from '../../context/PlaylistContext';

function MusicItem({ music }) {
  const audio = useRef(new Audio(music.link));
  const [playing, setPlaying] = useState(false);
  const { own, playlistId, loadPlaylistData } = usePlaylistContext();
  


  useEffect(() => { 
    audio.current.onplaying = () => {
      setPlaying(true)
    }
    audio.current.onpause = () => {
      setPlaying(false)
    }

  })

  const handlePlay = () => {
    if(playing) audio.current.pause()
    else audio.current.play()
  }

 const handleRemove = () => {
   axios
     .delete(`/playlist/removeSong/${playlistId}/${music._id}`)
     .then((res) => {
       loadPlaylistData();
       toast.success("removed successfully");
     })
     .catch((err) => toast.error(err.response?.data?.message || err.message));
 };

  return (
    <div>
      <div class="list-group list-group-horizontal ms-4 mt-5 ">
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
      </div>
    </div>
  );
}

export default MusicItem