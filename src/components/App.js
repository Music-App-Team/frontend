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
import { useUserInfoContext } from "../context/UserInfoContext";
import Profile from "./profile/Profile";
import { PlaylistContextProvider } from "../context/PlaylistContext";

function App() {
  const { isAuthenticated } = useUserInfoContext();
  console.log("isAuthenticated", isAuthenticated);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/app" /> : <Login />}/>
        <Route path="/SignUp" element={isAuthenticated ? <Navigate to="/app" /> : <SignUp />}/>
        <Route path="/" element={<Landing />} /><Route path="/app/*"element={isAuthenticated ? (<Layout>
                <Routes>
                  <Route path="search" element={<Search />} />
                  <Route path="comment" element={<Comment />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="playlists" element={<Playlist />} />
                  <Route path="playlist/:playlistId" element={
                      <PlaylistContextProvider>
                        <PlaylistDetail />
                      </PlaylistContextProvider>}/>
                  <Route path="playlists" element={<Playlist />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="*" element={<Navigate to="/app/dashboard" />} />
                </Routes>
              </Layout>
            ) : (
              <Navigate to={"/login"} />)}/>
        <Route path="*" element={<Navigate to="/app/dashboard" />} />
      </Routes>
    </div>
  );
}

export default App;
