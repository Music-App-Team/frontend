import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PlaylistItem from "../../components/playlistItem/PlaylistItem";
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
      {" "}
      <Header />
      <Container fluid>
        <Row>
          <Col className="playlistitem ps-0" lg={3}>
            {" "}
            <PlaylistItem />{" "}
          </Col>
          <Col lg={9} className="main-div">
            <div class="container  my-5">
              <div class="row ">
                <div class="col-md-12 ">
                  <h1>Play List</h1>

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
                    <FaPlayCircle />
                    <FaMinus />
                    <p>Ed Sheeran</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Search;
