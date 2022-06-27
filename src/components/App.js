import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Landing from "../pages/landing/Landing";
import Search from "../pages/search/Search";
import { Comment } from "../pages/comments/Comment";
import Playlist from "../pages/playlists/Playlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="*" element={<Layout />} />
        <Route path="/comment" element={<Comment />}></Route>
        <Route path="/playlist" element={<Playlist />}></Route>
      </Routes>
    </div>
  );
}

export default App;
