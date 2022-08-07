import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import axios from "axios";
import { UserInfoContextProvider } from "./context/UserInfoContext";
import { PlayerContextProvider } from "./context/PlayerContext";

axios.defaults.headers.common.token = localStorage.getItem("token");
axios.defaults.baseURL = process.env.REACT_APP_API_HOST;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserInfoContextProvider>
      <PlayerContextProvider>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </PlayerContextProvider>
    </UserInfoContextProvider>
  </React.StrictMode>
);
