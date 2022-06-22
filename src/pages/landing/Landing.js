import React from "react";
import "./landing.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { NavLink } from "react-router-dom";


function Landing() {
  return (
    <div>
      <Header />
      <div className="landing-container">
        <h1 className="slogan">
          The musicfy app let's you identify,listen, and discover songs!
        </h1>
        <div className="link">
          <NavLink to="/login">
            <button className="button">Try Free</button>
          </NavLink>
        </div>
      </div>
      <Footer/>
    </div>
  );

}

export default Landing;
