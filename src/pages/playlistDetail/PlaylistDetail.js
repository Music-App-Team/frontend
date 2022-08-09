import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./playListDetail.scss";
import SongList from "./components/songList";
import { AiOutlineComment } from "react-icons/ai";
import { MdDriveFileRenameOutline, MdAddBox } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import AddSongModal from "././components/addSongModal";
import { usePlaylistContext } from "../../context/PlaylistContext";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function PlaylistDetail() {
  const [addSongModalOpen, setAddSongModalOpen] = useState(false);
  const { playlistId } = useParams();
  const [inRenameStatus, setInRenameStatus] = useState(false);
  const [renameText, setRenameText] = useState("");
  const { playlistDetail, own, songs, loadPlaylistData} = usePlaylistContext();
  const navigate = useNavigate();

  if (!playlistDetail) return <p>loading ...</p>;

  const handleRenameClick = () => {
    setInRenameStatus(true);
    setRenameText(playlistDetail.title);
  };

  const handleRenameFinish = () => {
    axios
      .put("/playlist/renamePlaylist/" + playlistId, { title: renameText })
      .then((res) => {
        loadPlaylistData();
        setRenameText("");
        setInRenameStatus(false);
      })
      .catch((err) => toast.error(err.response?.data?.message || err.message));
  };



  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success m-2  border-success border-5 border-rounded-top",
      cancelButton: "btn btn-danger border-danger border-5",
    },
    buttonsStyling: false,
  });

  
  const handleDeletePlaylist = () => {
   swalWithBootstrapButtons
   .fire({
    title: "<strong>Are you sure you want to delete?</u></strong>",
    icon: "question",
    showCancelButton: true,
    confirmButtonText:
      '<img src="/images/thumbsUp.svg" alt="thumbsUp"/> ',
    cancelButtonText:
      '<img src="/images/thumbsDown.svg" alt="thumbsDown"/>',

    reverseButtons: true,
  })

  .then((result) => {
    if (result.isConfirmed) {
      axios
        .delete("/playlist/deletePlaylist/" + playlistId)
        .then((res) => {
          //toast.success("playlist removed successfully");
          navigate("/app/playlists");
        })
        .catch((err) =>
          toast.error(err.response?.data?.message || err.message)
        );
      swalWithBootstrapButtons.fire(
        "<span><strong>Playlist was successfully deleted!</strong></span>",
        '<span><img src="/images/ImHappy.svg" alt="ImHappy" /></span>',
        "success"
      );
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire(
        "<strong>Playlist not deleted!!</u></strong>",
        "<span></span>",
        "info"
      );
    }
  });

  };


  return (
    <>
      <div class="container-playlistdetail">
        <div class="playlistaction">
          <div>
            <img
              src="/images/playlistdetail.png"
              className="rounded float-start "
              alt=""
            />
          </div>
          <div className="detail__rows">
            {inRenameStatus ? (
              <input
                autoFocus
                value={renameText}
                onKeyUp={(e) => e.code === "Enter" && handleRenameFinish()}
                onBlur={handleRenameFinish}
                onChange={(e) => setRenameText(e.target.value)}
              />
            ) : (
              <h4 onClick={handleRenameClick}>{playlistDetail.title}</h4>
            )}

            <p className="detail__comment">
              {songs.length} songs
              <Link className="link" to={`/app/comment/${playlistId}`}>
                <AiOutlineComment />
              </Link>
            </p>
            <div className="detail__actions">
              {own && (
                <>
                  <div class="rename">
                    <button onClick={handleRenameClick}>
                      Rename <MdDriveFileRenameOutline />
                    </button>
                  </div>
                  <div class="delete">
                    <button onClick={handleDeletePlaylist}>
                      Delete <RiDeleteBin5Line />
                    </button>
                  </div>
                  <div class="add-song">
                    <button onClick={() => setAddSongModalOpen(true)}>
                      Add Song <MdAddBox />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <hr className="hr" />
        <SongList />
      </div>
      <AddSongModal
        open={addSongModalOpen}
        playlistId={playlistId}
        onClose={() => setAddSongModalOpen(false)}
        onUpdate={loadPlaylistData}
      />
    </>
  );

}
export default PlaylistDetail;
