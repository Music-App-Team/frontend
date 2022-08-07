import React from "react";
import { useState } from "react";
import "./search.scss";
import axios from "axios";
import { Link } from "react-router-dom";

function Search() {
  const [searchSong, setSearchSong] = useState("");
  const [results, setResults] = useState([]);
  const [hasNoResult, setHasNoResult] = useState(false);
  const loadPlaylists = async () => {
    try {
      const searchurl = `/playlist/search/?title=${searchSong}`;
      const response = await axios.get(searchurl);
      setResults(response.data);
      if (response.data.length === 0) setHasNoResult(true);
      else setHasNoResult(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="searchContainer">
      <div class="col-12 ">
        <h1>search playlists</h1>
        <input
          className="search-input"
          type="text"
          placeholder="search.."
          value={searchSong}
          onChange={(event) => {
            setSearchSong(event.target.value);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              loadPlaylists();
            }
          }}
        />

        <div className="searchSongResult">
          {hasNoResult && <h1>Album Result :0 </h1>}

          {results.map((item) => {
            console.log(item);
            return (
              <div key={item._id} className="albumResult">
                <p className="album-text">{item.title}</p>
                <p>{item.user.firstName}</p>
                <p>{item.songs.length}</p>
                <Link to={`/app/playlist/${item._id}`} className="albumResult__link">
                  <button className="button-playlist">View</button>
                </Link>
              </div>
            );
          })}
        </div>
        {/* <h1>Song Result</h1>
        <div className="albumResult">
          <p className="album-text">Shape of you</p>
          <div className="icon-result">
            {" "}
            <FaPlayCircle className="search__play" />
            <FaMinus className="search__play" />
          </div>
          <p>Ed Sheeran</p>
          <button>Pop Music</button>
          <p>06:09</p>
          <p className="langSong">Englisch</p>
        </div> */}
      </div>
    </div>
  );
}
export default Search;
