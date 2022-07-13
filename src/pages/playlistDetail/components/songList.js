import React from 'react'
import MusicItem from "../../../components/musicItem/MusicItem";

const SongList = ({songs}) => {
  return (
    <div className="list-songs">
      {songs.map((item) => (
        <MusicItem music={item} />
      ))}
     
      </div>
  );
}

export default SongList