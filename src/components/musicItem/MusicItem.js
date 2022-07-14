import React, { useEffect,useState, useRef } from 'react'
import { AiFillPlayCircle, AiFillMinusCircle, AiFillPauseCircle } from "react-icons/ai";

function MusicItem({ music }) {
  const audio = useRef(new Audio(music.link));
  const [playing ,setPlaying] = useState(false);


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
          <AiFillMinusCircle />
        </span> 
        <span class="list-group-item">{music.artist}</span>
        <span class="list-group-item">{music.album}</span>
        <span class="list-group-item">{music.lang}</span>
      </div>
    </div>
  );
}

export default MusicItem