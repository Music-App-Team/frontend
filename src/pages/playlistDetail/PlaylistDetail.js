import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import Modal from '../../components/modal/Modal'
import { useState } from 'react';
import "./playListDetail.scss";
import axios from 'axios';
import { toast } from "react-toastify";
import { useParams} from "react-router-dom";

import { BsPlay } from 'react-icons/bs';
import { AiOutlineCloudDownload, AiFillPlayCircle, AiFillMinusCircle, AiOutlineComment } from 'react-icons/ai';
import { MdDriveFileRenameOutline, MdAddBox } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';





function PlaylistDetail() {
  const [isOpen, setIsOpen] = useState(false)

  const [playlistName,setPlaylistName]=useState(null)

  const params = useParams();

 useEffect(()=>{
function playlistname(){ 
    
     axios.get(`http://localhost:3010/playlist/getPlaylistById/${params.id}`)
      .then((res) => setPlaylistName(res.data))
      .catch((err) => toast.error(err.response?.data?.message || err.message));
} 
 if (params?.id){
  playlistname()
 }
 },[params.id]);

  return (
    <div>
      <div class="container-playlistdetail">
      
       <div class="playlistaction ">
          <div> <img src="/images/playlistdetail.png" className="rounded float-start " alt="" /></div>
          
          <div class="playall row ">
             {playlistName?<p>{playlistName.title}</p>:undefined}
                
          
           
            <p> {playlistName?.songs?.length}songs <Link className="link" to="/app/comment"><AiOutlineComment /></Link></p>
            <button className="play">Play All <BsPlay /></button>
          </div>
          <div class="download"><button>Download <AiOutlineCloudDownload /></button></div>
          <div class="rename"><button>Rename <MdDriveFileRenameOutline /></button></div>
          <div class="delete"><button>Delete <RiDeleteBin5Line /></button></div>
          <div class="add-song"><button onClick={() => setIsOpen(true)}>Add Song <MdAddBox /></button> 
           
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        </Modal>
          </div>
        </div>
        
        <hr  className="hr"/>
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
    </div>
  )
}

export default PlaylistDetail;