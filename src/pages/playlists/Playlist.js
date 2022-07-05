import React, { useEffect, useState } from "react";
import "./playList.scss";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { MdOutlineStarOutline } from "react-icons/md";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import CreatePlaylistModal from "./createPlaylistModal";
import axios from "axios";
import { toast } from "react-toastify";

function Playlist() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  function handleCreatePlaylist() {
    setOpenCreateModal(true);
  }

  useEffect(() => {
    getPlayList();
  }, []);

  function getPlayList() {
    axios
      .get("http://localhost:3010/playlist/getAllPlaylists")
      .then((res) => setPlaylists(res.data))
      .catch((err) => toast.error(err.response?.data?.message || err.message));
  }

  return (
    <div className="container-fluid">
      <Container className="container-playlist">
        <div className="header-playlist">
          <h1 className="playlist-h1">Play List</h1>
          <button className="button-create" onClick={handleCreatePlaylist}>
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
            {playlists.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td>Eli</td>
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
            ))}
          </tbody>
        </Table>
      </Container>
      <CreatePlaylistModal open={openCreateModal} onUpdate={getPlayList} onClose={() => setOpenCreateModal(false)}
      />
    </div>
  );
}

export default Playlist;
