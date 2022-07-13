import React from 'react'
import { AiFillPlayCircle, AiFillMinusCircle } from "react-icons/ai";

function MusicItem({music}) {
  return (
    <div>
      <div class="list-group list-group-horizontal ms-4 mt-5 ">
        <span class="list-group-item">{music.name}</span>
        <span class="list-group-item">
          <AiFillPlayCircle />
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