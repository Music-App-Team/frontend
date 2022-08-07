import React, { useEffect, useState } from "react";
import "./playList.scss";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { MdOutlineStarOutline } from "react-icons/md";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import CreatePlaylistModal from "./createPlaylistModal";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Playlist() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [likes, setLikes] = useState([]);
  const [dislikes, setDisLikes] = useState([]);

  function handleCreatePlaylist() {
    setOpenCreateModal(true);
  }

  useEffect(() => {
    getPlayList();
  }, []);

  function getPlayList() {
    axios
      .get("/playlist/getAllPlaylists")
      .then((res) => setPlaylists([...res.data]))
      .catch((err) => toast.error(err.response?.data?.message || err.message));
  }

  function handleAddToFavorite(playlistId) {
    axios
      .get(`/user/addPlaylistToFavorite/${playlistId}`)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => toast.error(err.response?.data?.message || err.message));
  }

  // add like
  const addLikes = async (newLikes) => {
    try {
      const request = await axios.patch(`/user/likes`, { likes: newLikes });
    } catch (error) {
      console.log(error);
    }
  };

  const toggleLike = (id) => {
    if (likes.find((like) => id === like)) {
      const newLikes = likes.filter((like) => like !== id);
      setLikes(newLikes);
      addLikes(newLikes);
    } else {
      const newLikes = [...likes, id];
      setLikes(newLikes);
      addLikes(newLikes);
    }
  };
  // git Likes
  useEffect(() => {
    function getLikes() {
      axios
        .get("/user/getlikes")
        .then((res) => {
          setLikes(res.data);
        })
        .catch((err) =>
          toast.error(err.response?.data?.message || err.message)
        );
    }

    getLikes();
  }, []);

  // ADD DISLIKES
  const addDisLikes = async (newDisLikes) => {
    try {
      const request = await axios.patch(`/user/dislikes`, {
        dislikes: newDisLikes,
      });
    } catch (error) {}
  };

  const toggleDisLike = (id) => {
    if (dislikes.find((dislike) => id === dislike)) {
      const newDisLikes = dislikes.filter((dislike) => dislike !== id);
      setDisLikes(newDisLikes);
      addDisLikes(newDisLikes);
    } else {
      const newDisLikes = [...dislikes, id];
      setDisLikes(newDisLikes);
      addDisLikes(newDisLikes);
    }
  };
  // git DisLikes
  useEffect(() => {
    function getDisLikes() {
      axios
        .get("/user/getdislikes")
        .then((res) => {
          setDisLikes(res.data);
        })
        .catch((err) =>
          toast.error(err.response?.data?.message || err.message)
        );
    }

    getDisLikes();
  }, []);
  return (
    <>
      <Container className="container-playlist">
        <div className="header-playlist">
          <h1 className="playlist-h1">Play List</h1>
          <button className="button-create" onClick={handleCreatePlaylist}>
            Create
          </button>
        </div>
        <div >
          <Table className="playlist-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>User</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {playlists.map(
                (item) => (
                  <tr>
                    <td>{item.title}</td>
                    <td>{item.user?.firstName}</td>
                    <td>
                      <div className="container-action">
                        <Link to={`/app/playlist/${item._id}`}>
                          <button className="button-playlist">View</button>
                        </Link>
                        <span
                          className="like"
                          style={{
                            color: likes.find((like) => item._id === like)
                              ? "blue"
                              : undefined,
                          }}
                          key={item._id}
                          onClick={() => toggleLike(item._id)}
                        >
                          <AiOutlineLike />
                        </span>
                        <span
                          className="dislike"
                          style={{
                            color: dislikes.find(
                              (dislike) => item._id === dislike
                            )
                              ? "red"
                              : undefined,
                          }}
                          key={item._id}
                          onClick={() => toggleDisLike(item._id)}
                        >
                          <AiOutlineDislike />
                        </span>
                        <span
                          className="star"
                          href="url"
                          onClick={() => handleAddToFavorite(item._id)}
                        >
                          <MdOutlineStarOutline />
                        </span>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </div>
      </Container>
      <CreatePlaylistModal
        open={openCreateModal}
        onUpdate={getPlayList}
        onClose={() => setOpenCreateModal(false)}
      />
    </>
  );
}

export default Playlist;
