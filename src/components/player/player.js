import React from "react";
import {
  FaPlayCircle,
  FaPauseCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { usePlayerContext } from "../../context/PlayerContext";
import "./player.scss";
import play1Icon from "../../assets/play1.gif";



function Player() {
  const {
    isPlaying,
    songDuration,
    play,
    pause,
    currentSongName,
    currentTime,
    progressPercent,
    closePlayer,
  } = usePlayerContext();

  if (!currentSongName) return <></>;
  return (
    <div className="playerContainer">
      <img src="/images/playlistdetail.png" className="songCover" alt="" />
      <div className="playerContainer__rows">
        <div className="playerContainer__row1">
          <h4>{currentSongName}</h4>
          <div className="playerContainer__icons">
            {isPlaying ? <img width={70} src={play1Icon} /> : <span style={{width : "70px"}}></span>}
            {isPlaying ? (
              <FaPauseCircle className="centerIcon" onClick={pause} />
            ) : (
              <FaPlayCircle className="centerIcon" onClick={() => play()} />
            )}
            <FaTimesCircle onClick={closePlayer}/>
          </div>
        </div>
        <div className="playerContainer__row2">
          <span>{currentTime}</span>
          <div className="progressContainer">
            <div
              className="progressBar"
              style={{ width: progressPercent + "%" }}
            />
          </div>
          <span>{songDuration}</span>
        </div>
      </div>
    </div>
  );
}

export default Player;
