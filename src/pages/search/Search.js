import React from "react";
import "./search.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineStar } from "react-icons/ai";
import { FaPlayCircle } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function Search() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="main-div ">
            <div class="container  my-5">
              <div class="row ">
                <div class="col-md-12 ">
                  <h1>Play List</h1>
<<<<<<< HEAD
=======

>>>>>>> dev
                  <input
                    className="search-input"
                    type="text"
                    placeholder="search.."
                  />
                  <h1>Album Result</h1>
                  <div className="albumResult">
                    <p>Pop Music</p>
                    <p>Sam</p>
                    <p>2 songs</p>
                    <div>
                      {" "}
                      <AiOutlineStar className="star" />
                      <button>View</button>
                    </div>
                  </div>
                  <h1>Song Result</h1>
                  <div className="albumResult">
                    <p>Shape of you</p>
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
