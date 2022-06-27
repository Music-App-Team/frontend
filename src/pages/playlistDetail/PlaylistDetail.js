import React from 'react';
import "./playlistDetail.scss";
import MusicItem from '../../components/musicItem/MusicItem'

function PlaylistDetail() {
  return (
    <div>
      <h1>PlaylistDetail</h1>
      {[1, 2, 3].map(item => <MusicItem title={item.title} artist={item.artist} />)}
    </div>
  );
}

export default PlaylistDetail;