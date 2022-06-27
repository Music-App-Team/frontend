import React from 'react';
import PlaylistItem from "../../components/playlistItem/PlaylistItem";


function Playlist() {
  return (
    <div>
      <h1>Playlist</h1>
      {[1,2,3].map(item=> <playlistItem/>)}
    </div>
  );
}

export default Playlist;