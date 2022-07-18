import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import "./playListDetail.scss";
import { BsPlay } from "react-icons/bs";
import SongList from "./components/songList";
import { AiOutlineCloudDownload, AiOutlineComment} from "react-icons/ai";
import { MdDriveFileRenameOutline, MdAddBox } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import AddSongModal from "././components/addSongModal";
import { usePlaylistContext } from "../../context/PlaylistContext";

function PlaylistDetail() {
  const [addSongModalOpen, setAddSongModalOpen] = useState(false);
  const { playlistId } = useParams();

  const {playlistDetail, own, songs, loadPlaylistData} = usePlaylistContext()

  if (!playlistDetail) return <p>loading ...</p>;



  return (
    <div>
      <div class="container-playlistdetail">
        <div class="playlistaction ">
          <div>
            <img
              src="/images/playlistdetail.png"
              className="rounded float-start "
              alt=""
            />
          </div>
          <div class="playall row ">
            <p>{playlistDetail.title}</p>
            <p>
              {songs.length} songs
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
        <SongList />
      </div>
      <AddSongModal
        open={addSongModalOpen}
        playlistId={playlistId}
        onClose={() => setAddSongModalOpen(false)}
        onUpdate={loadPlaylistData}
      />
    </div>
  );
}

export default PlaylistDetail;
