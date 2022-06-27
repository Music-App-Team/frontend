import React from 'react'

function MusicItem({music}) {
  return (
    <div>
      <span>{music.name}</span>
      <span>{music.artist}</span>
      <button>play</button>
    </div>
  )
}

export default MusicItem