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

axios.defaults.headers.common.token = localStorage.getItem("token");
axios.defaults.baseURL = "http://localhost:3010";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserInfoContextProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </UserInfoContextProvider>
  </React.StrictMode>
);
