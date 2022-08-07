import React, {
  createContext,
  useEffect,
  useContext,
  useRef,
  useState,
} from "react";

function formatTime(time) {
  if (!time) return "";
  // time = 137.55656 => 02:17
  let minute = Math.floor(time / 60);
  let second = Math.floor(time % 60);

  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  return `${minute}:${second}`;
}

export const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const audio = useRef(new Audio()).current;
  const [isPlaying, setIsPlaying] = useState(false);
  const [songDuration, setSongDuration] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [currentSong, setCurrentSong] = useState();

  useEffect(() => {
    audio.onplaying = () => {
      setIsPlaying(true);
      setCurrentTime(0);
      setInterval(() => {
        setCurrentTime(audio.currentTime);
      }, 1000);
    };
    audio.onpause = () => {
      setIsPlaying(false);
    };
  }, []);

  function play(music) {
    if (music) {
      const { link } = music;
      audio.src = link;
      setCurrentSong(music);
    }
    audio.play();
    
    audio.ondurationchange = function () {
      setSongDuration(audio.duration);
    };
  }

  function pause() {
    audio.pause();
  }

  function closePlayer(){
    audio.src=""
    setCurrentTime("")
    setCurrentSong()
  
  }

  return (
    <PlayerContext.Provider
      value={{
        play,
        pause,
        progressPercent : currentTime/songDuration*100,
        currentTime: formatTime(currentTime),
        currentLink: currentSong?.link,
        currentSongName: currentSong?.name,
        isPlaying,
        songDuration: formatTime(songDuration),
        closePlayer
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => {
  return useContext(PlayerContext);
};
