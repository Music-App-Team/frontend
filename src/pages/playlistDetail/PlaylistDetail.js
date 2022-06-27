import React from 'react'
import { Link } from "react-router-dom";

import "./playListDetail.scss";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PlaylistItem from "../../components/playlistItem/PlaylistItem";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { BsPlay } from 'react-icons/bs';
import { AiOutlineCloudDownload, AiFillPlayCircle, AiFillMinusCircle, AiOutlineComment } from 'react-icons/ai';
import { MdDriveFileRenameOutline, MdAddBox } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';



function PlaylistDetail() {
  return (
    <div>
      <Header />
      <Container fluid >
        <Row>
          <Col className="playlistitem ps-0" lg={3}>  <PlaylistItem /> </Col>
          <Col lg={9}>
            <div class="container-playlistdetail">
              <div class="playlistaction ">
                <div class="img "> <img src="images/playlistdetail.png" className="rounded float-start " alt="" /></div>
                <div class="playall row ">
                  <p>Light Musics</p>
                  <p>5 songs <Link className="link" to="/comment"><AiOutlineComment /></Link></p>

                  <button className="play">Play All <BsPlay /></button>
                </div>
                <div class="download"><button>Download <AiOutlineCloudDownload /></button></div>
                <div class="rename"><button>Rename <MdDriveFileRenameOutline /></button></div>
                <div class="delete"><button>Delete <RiDeleteBin5Line /></button></div>
                <div class="add-song"><button>Add Song <MdAddBox /></button></div>
              </div>
              <hr />
              <div className="list-songs"> 
                <ul class="list-group list-group-horizontal ms-4 mt-5 ">
                  <li class="list-group-item">Shape of you</li>
                  <li class="list-group-item"><AiFillPlayCircle /><AiFillMinusCircle /></li>
                  <li class="list-group-item">Ed Sheeran</li>
                  <li class="list-group-item">Album: Divide</li>
                  <li class="list-group-item">03:24</li>
                  <li class="list-group-item">English</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
      <Footer />
    </div>
  )
}

export default PlaylistDetail