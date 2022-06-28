import React from "react";
import "./playList.scss";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { MdOutlineStarOutline } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";




function Playlist() {
  return (
    <div className="container-fluid">
      <Container className="container-playlist">
        <div className="header-playlist">
          <h1 className="playlist-h1">Play List</h1>
          <button className="button-create">
            Create
          </button>
        </div>
        <Table className="playlist-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Happy songs</td>
              <td>Saman</td>
              <td>
                <div className="container-action">
                  {" "}
                  <button className="button-playlist">View</button>
                  <a className="like" href="url">
                    <AiOutlineLike />
                  </a>
                  <a className="dislike" href="url">
                    <AiOutlineDislike />
                  </a>
                  <a className="star" href="url">
                    <MdOutlineStarOutline />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Light songs</td>
              <td>John</td>
              <td>
                <div className="container-action">
                  {" "}
                  <button className="button-playlist">View</button>
                  <a className="like" href="url">
                    <AiOutlineLike />
                  </a>
                  <a className="dislike" href="url">
                    <AiOutlineDislike />
                  </a>
                  <a className="star" href="url">
                    <MdOutlineStarOutline />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Sad songs</td>
              <td>Sara</td>
              <td>
                <div className="container-action">
                  {" "}
                  <button className="button-playlist">View</button>
                  <a className="like" href="url">
                    <AiOutlineLike />
                  </a>
                  <a className="dislike" href="url">
                    <AiOutlineDislike />
                  </a>
                  <a className="star" href="url">
                    <MdOutlineStarOutline />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Playlist;

