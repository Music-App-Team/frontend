import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const PlaylistContext = createContext();

export const PlaylistContextProvider = ({ children }) => {
  const [playlistDetail, setPlaylistDetail] = useState();
  const [own, setOwn] = useState(false);
  const songs = playlistDetail?.songs || [];
  const comments = playlistDetail?.comments || [];
  const { playlistId } = useParams();
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audio = useRef(new Audio());

  function loadPlaylistData() {
    axios
      .get("/playlist/getDetail/" + playlistId)
      .then((res) => {
        setPlaylistDetail(res.data.playlist);
        setOwn(res.data.own);
      })
      .catch((err) => toast.error(err.response?.data?.message || err.message));
  }

  useEffect(() => {
    loadPlaylistData();
  }, [playlistId]);

  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    audio.current.onplaying = () => {
      setPlaying(true);
    };
    audio.current.onpause = () => {
      setPlaying(false);
    };
  });

/*   const togglePlayAll = () => {
    if (!playing && songs && songs.length > 0) {
      audio.current.src = songs[currentSongIndex].link;
      audio.current.playbackRate = 10;
      audio.current.play();
      audio.current.addEventListener("ended",() => {
        setCurrentSongIndex((lastIndex) => lastIndex + 1);
      });
    } else audio.current.pause();
  }; */

  useEffect(() => {
    if (!songs || !songs[currentSongIndex]) return;
    audio.current.src = songs[currentSongIndex].link;
    audio.current.play();
  }, [currentSongIndex]);

  return (
    <PlaylistContext.Provider
      value={{
        playlistDetail,
        own,
        setOwn,
        songs,
        comments,
        loadPlaylistData,
        playlistId,
        //togglePlayAll,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylistContext = () => {
  return useContext(PlaylistContext);
};
