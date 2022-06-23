import React from "react";
import Header from "../header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Playlist from "../../pages/playlists/Playlist";
import PlaylistDetail from "../../pages/playlistDetail/PlaylistDetail";
import Footer from "../footer/Footer";
import PlaylistItem from "../playlistItem/PlaylistItem";
import "bootstrap/dist/css/bootstrap.css";

function layout() {
  return (
    <div>
      <Header />
      <PlaylistItem />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/playlists" element={<Playlist />}></Route>
        <Route path="/playlistDetail/:id" element={<PlaylistDetail />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default layout;
