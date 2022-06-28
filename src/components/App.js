import Layout from "./layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Landing from "../pages/home/Home";
import Search from "../pages/search/Search";
import { Comment } from "../pages/comments/Comment";
import Dashboard from "../pages/dashboard/dashboard";
import Playlist from "../pages/playlists/Playlist";
import PlaylistDetail from "../pages/playlistDetail/PlaylistDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/app/*"
          element={
            <Layout>
              <Routes>
                <Route path="search" element={<Search />}></Route>
                <Route path="comment" element={<Comment />}></Route>
                <Route path="dashboard" element={<Dashboard />}></Route>
                <Route path="playlists" element={<Playlist />}></Route>
<<<<<<< HEAD
                <Route path="playlist/:id" element={<PlaylistDetail />}></Route>
                {/* <Route path="*" element={<Navigate to="/app/dashboard" />} ></Route> */}
=======
                <Route path="playlist" element={<PlaylistDetail />}></Route>
                <Route path="*" element={<Navigate to="/app/dashboard" />} ></Route>
>>>>>>> dev
              </Routes>
            </Layout>
          }
        ></Route>
        <Route path="*" element={<Navigate to="/app/dashboard" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
