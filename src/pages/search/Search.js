import React from "react";
import { useState } from "react";
import "./search.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { AiOutlineStar } from "react-icons/ai";
import { FaPlayCircle } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

// const url = process.env.REACT_APP_API_HOST;

function Search() {
  const [searchSong, setSearchSong] = useState("");
  const [results, setResults] = useState([]);
  const loadPlaylists = async () => {
    try {
      const searchurl = `/playlist/search/?title=${searchSong}`;
      const response = await axios.get(searchurl);
      setResults(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="main-div ">
            <div class="container  my-5">
              <div class="row ">
                <div class="col-md-12 ">
                  <h1>Play List</h1>

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

                  <div>
                    <h1>Album Result:{results.length}</h1>

                    {results.map((item) => {
                      console.log(item);
                      return (
                        <div key={item._id} className="albumResult">
                          <p className="album-text">{item.title}</p>
                          <p>{item.user.firstName}</p>
                          <p>{item.songs.length}</p>
                          <div>
                            {" "}
                            {/* <AiOutlineStar className="star" /> */}
                            <Link to={`/app/playlist/${item._id}`}>
                              <button className="button-playlist">View</button>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <h1>Song Result</h1>
                  <div className="albumResult">
                    <p className="album-text">Shape of you</p>
                    <div className="icon-result">
                      {" "}
                      <FaPlayCircle className="play" />
                      <FaMinus className="play" />
                    </div>

                    <p>Ed Sheeran</p>
                    <button>Pop Music</button>
                    <p>06:09</p>
                    <p className="langSong">Englisch</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Search;
