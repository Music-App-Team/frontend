import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const PlaylistContext = createContext();

export const PlaylistContextProvider = ({ children }) => {

  const [playlistDetail, setPlaylistDetail] = useState();
  const [own, setOwn] = useState(false);
  const songs = playlistDetail?.songs || [];
  const comments = playlistDetail?.comments  || []; 
  const { playlistId }=useParams();

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
 
 
  
  return (
    <PlaylistContext.Provider
      value={{
        playlistDetail,
        own,
        setOwn,
        songs,
        comments,
        playlistId,loadPlaylistData,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylistContext = () => {
  return useContext(PlaylistContext);
};
