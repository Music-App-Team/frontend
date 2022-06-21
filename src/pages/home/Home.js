import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { FaSistrix } from "react-icons/fa";

function Home() {
  return (
    <div>
      <AiFillHome />
      Home <br />
      <MdOutlinePlaylistPlay />
      Play List <br />
      <FaSistrix />
      Search Song
    </div>
  );
}

export default Home;
