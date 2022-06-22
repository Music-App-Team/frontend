import Layout from './layout/Layout'
import {Routes,Route} from 'react-router-dom'
import Login from '../pages/login/Login'
import SignUp from "../pages/SignUp/SignUp";
import Landing from "../pages/landing/Landing";
import { Comment } from "../pages/comments/Comment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="*" element={<Layout />} />
        <Route path="/comment" element={<Comment />}></Route>
      </Routes>
    </div>
  );
}

export default App;
