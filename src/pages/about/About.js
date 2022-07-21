import React from "react";
import "./About.scss";
// import Container from "react-bootstrap/Container";
// import { NavLink } from "react-router-dom";
// import Table from "react-bootstrap/Table";

function About() {
  return (
    <div className="container-main-about">
      <div className="container-about">
        <div className="header-about">
          <h1 className="about-h1">About Us</h1>
          <p className="p-about">
            Wir sind ein team die ein Music App entwickelt haben mit der name
            “Musicfy” und lernen seit August 2021 Web-Enwicklung bei DCI -
            Digital Career Institute und sind zurzeit bei Final Project und
            entwickle unsere Music-App.{" "}
          </p>
          <p className="p-about">
            Vier Entwickler sind wir und zwar:
            <div className="li-name">
              <div className="li-a">
                <li className="li-about">Aisha :</li>
                <a href="https://github.com/aisha2000-hub">
                  <li>GitHub -</li>
                </a>
                <a href="https://www.linkedin.com/in/aisha-noori/">
                  <li>LinkedIn</li>
                </a>
              </div>

              <div className="li-a">
                <li className="li-about">Veaceslav :</li>
                <a href="https://github.com/slavablack">
                  <li>GitHub -</li>
                </a>
                <a href="https://www.linkedin.com/in/veaceslav-ciornii/">
                  <li>LinkedIn</li>
                </a>
              </div>

              <div className="li-a">
                <li className="li-about">Jaber :</li>
                <a href="https://github.com/jaber-1988">
                  <li>GitHub -</li>
                </a>
                <a href="https://www.linkedin.com/in/jaber-abdullah-a02922239/">
                  <li>LinkedIn</li>
                </a>
              </div>
              <div className="li-a">
                <li className="li-about">Mazen :</li>
                <a href="https://github.com/Mazen88cdi">
                  <li>GitHub -</li>
                </a>

                <a href="https://www.linkedin.com/in/mazen-altaha-4590971b9/">
                  <li>LinkedIn</li>
                </a>
              </div>
            </div>
          </p>
          <p className="p-about">
            Unsere “Musicfy” haben wir entwickelt mit folgende Frameworks:
            <li className="li-about">-UX-UI Figma</li>
            <li className="li-about">-React</li>
            <li className="li-about">-SCSS</li>
            <li className="li-about">-Bootstrap</li>
            <li className="li-about">-Context</li>
            <li className="li-about">-Express</li>
            <li className="li-about">-MongoDB</li>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;


