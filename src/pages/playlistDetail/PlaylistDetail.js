import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import { BsPlay } from "react-icons/bs";
import {
  AiOutlineCloudDownload,
  AiFillPlayCircle,
  AiFillMinusCircle,
  AiOutlineComment,
} from "react-icons/ai";
import { MdDriveFileRenameOutline, MdAddBox } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import AddSongModal from "./addSongModal";
import axios from "axios";
import { toast } from "react-toastify";
import "./playListDetail.scss";


function PlaylistDetail() {
  const [addSongModalOpen, setAddSongModalOpen] = useState(false);
  const { playlistId } = useParams();
  const [own, setOwn] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("/playlist/getDetail/" + playlistId)
      .then((res) => {
        setData(res.data.playlist);
        setOwn(res.data.own);
      })
      .catch((err) => toast.error(err.response?.data?.message || err.message));
  }, [playlistId]);

  if (!data) return <p>loading ...</p>;
  return (
    <div>
      <div class="container-playlistdetail">
        <div class="playlistaction ">
          <div>
            {" "}
            <img
              src="/images/playlistdetail.png"
              className="rounded float-start "
              alt=""
            />
          </div>
          <div class="playall row ">
            <p>{data.title}</p>
            <p>
              {data.songs.length} songs
              <Link className="link" to="/app/comment">
                <AiOutlineComment />
              </Link>
            </p>
            <button className="play">
              Play All <BsPlay />
            </button>
          </div>
          <div class="download">
            <button>
              Download <AiOutlineCloudDownload />
            </button>
          </div>
          {own && (
            <>
              <div class="rename">
                <button>
                  Rename <MdDriveFileRenameOutline />
                </button>
              </div>
              <div class="delete">
                <button>
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
        <hr className="hr" />
        <div className="list-songs">
          <ul class="list-group list-group-horizontal ms-4 mt-5 ">
            <li class="list-group-item">Shape of you</li>
            <li class="list-group-item">
              <AiFillPlayCircle />
              <AiFillMinusCircle />
            </li>
            <li class="list-group-item">Ed Sheeran</li>
            <li class="list-group-item">Album: Divide</li>
            <li class="list-group-item">03:24</li>
            <li class="list-group-item">English</li>
          </ul>
        </div>
      </div>
      <AddSongModal
        open={addSongModalOpen}
        playlistId={playlistId}
        onClose={() => setAddSongModalOpen(false)}
      />
    </div>
  );
}

export default PlaylistDetail;
