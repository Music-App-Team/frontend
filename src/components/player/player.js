import React from "react";
import {
  FaPlayCircle,
  FaPauseCircle,
  FaTimesCircle,
  FaForward,
  FaBackward,
} from "react-icons/fa";
import { usePlayerContext } from "../../context/PlayerContext";
import "./player.scss";
import playIcon from '../../assets/play.gif'

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
            {/* <FaBackward className="iconSmall" /> */}
            {isPlaying ? <img width={70} src={playIcon} /> : <span style={{width : "70px"}}></span>}
            {isPlaying ? (
              <FaPauseCircle className="centerIcon" onClick={pause} />
            ) : (
              <FaPlayCircle className="centerIcon" onClick={() => play()} />
            )}
            <FaTimesCircle onClick={closePlayer}/>
            {/* <FaForward className="iconSmall" /> */}
          </div>
        </div>
        <div className="playerContainer__row2">
          <span>{currentTime}</span>
          <div className="progressContainer">
            <div
              className="progressbar"
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
