import Layout from './layout/Layout'
import {Routes,Route} from 'react-router-dom'
import Login from '../pages/login/Login'
import SignUp from "../pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
