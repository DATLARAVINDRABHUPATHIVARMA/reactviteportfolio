import React from "react";
import { Typewriter } from "react-simple-typewriter";
import './Home.css'

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-parent">
        <div className="home-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.google.com">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.linkedin.com">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.github.com/DATLARAVINDRABHUPATHIVARMA">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.twitter.com">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="home-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <span className="highlighted-text">
                DATLA RAVINDRA BHUPATHI VARMA
              </span>
            </span>
          </div>
          <div className="home-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typewriter
                  words={[
                    "Web Developer🌐",
                    "Problem Solver📈",
                    "Full Stack Developer💻",
                    "Team Player👨‍💼",
                    "Mern Dev👨‍💻",
                  ]}
                  loop={[]}
                />
              </h1>
              <span className="home-role-tagline">
                Knack of building applications with fullStack operations.
              </span>
            </span>
          </div>
          <div className="home-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}
            </button>
            <a href="Resume.pdf" download="RavindraResume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
