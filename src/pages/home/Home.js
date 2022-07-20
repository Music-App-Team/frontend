import React from "react";
import "./Home.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { NavLink } from "react-router-dom";


function Home() {
  return (
    <div>
      <Header />
      <div className="home-container">
        <h1 className="slogan">
          The musicfy app let's you identify,listen, and discover songs!
        </h1>
        <div className="link">
          <NavLink to="/login">
            <button className="button">Try Free 😊</button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );

}

export default Home;
