import React from 'react';
import MusicItem from "../../components/musicItem/MusicItem";


function PlaylistDetail() {
  return (
    <div>
      <h1> PlaylistDetail</h1>
      {[1,2,3].map(item=><musicItem />)}
   
    </div>
  );
}

export default PlaylistDetail;