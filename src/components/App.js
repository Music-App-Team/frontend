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
  const isLogin = localStorage.getItem("token");

  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={isLogin ? <Navigate to="/app" /> : <Login />}
        />
        <Route
          path="/SignUp"
          element={isLogin ? <Navigate to="/app" /> : <SignUp />}
        />
        <Route path="/" element={<Landing />} />
        <Route
          path="/app/*"
          element={
            isLogin ? (
              <Layout>
                <Routes>
                  <Route path="search" element={<Search />} />
                  <Route path="comment" element={<Comment />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="playlists" element={<Playlist />} />
                  <Route path="playlist/:id" element={<PlaylistDetail />} />
                  <Route path="*" element={<Navigate to="/app/dashboard" />} />
                </Routes>
              </Layout>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route path="*" element={<Navigate to="/app/dashboard" />} />
      </Routes>
    </div>
  );
}

export default App;
