import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PlaylistItem from "../../components/playlistItem/PlaylistItem";
import "./search.scss";

function Search() {
  return (
    <>
      {" "}
      <Header />
      <PlaylistItem />
      <div>
        <div className="search">Search etwas</div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
