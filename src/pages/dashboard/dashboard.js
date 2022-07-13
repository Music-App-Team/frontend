import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import { CgTrashEmpty } from "react-icons/cg";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function Dashboard() {
  const [playlists, setPlaylists] = useState([]);

  function getData() {
    axios
      .get("/user/getMyFavoritePlaylists")
      .then((res) => {
        setPlaylists(res.data);
      })
      .catch((err) => toast.error(err.response?.data?.message || err.message));
  }
  useEffect(() => {
    getData();
  }, []);

  function handleRemovePlaylistFromFavorite(id) {
    axios
      .delete("/user/removePlaylistFromFavorite/" + id)
      .then((res) => {
        toast.success("success");
        getData();
      })
      .catch((err) => toast.error(err.response?.data?.message || err.message));
  }

  return (
    <div className="container-fluid">
      <Container className="container-dashboard">
        <h1 className="playlist-h1">Home</h1>
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
                <td>{item.user?.firstName}</td>
                <td>
                  <div className="container-action">
                    {" "}
                    <Link to={`/app/playlist/${item._id}`}>
                      <button className="button-playlist">Open</button>
                    </Link>
                    <span
                      onClick={() => handleRemovePlaylistFromFavorite(item._id)}
                    >
                      <CgTrashEmpty className="trash" />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Dashboard;



