import React from 'react'
import MusicItem from "../../../components/musicItem/MusicItem";
import { usePlaylistContext } from '../../../context/PlaylistContext';

const SongList = () => {

  const { songs } = usePlaylistContext()
  
  return (
    <div className="list-songs">
      {songs.map((item) => (
        <MusicItem music={item} />
      ))}
     
      </div>
  );
}

export default SongList;