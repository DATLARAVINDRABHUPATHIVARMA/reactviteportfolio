import React from "react";
import Typical from 'typical';


export default function Home() {
  return (
    <div className="home-container">
      <div className="home-parent">
        <div className="home-details">
          <div className="colz">
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
          <div className="home-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">DATLA RAVINDRA BHUPATHI VARMA</span>
            </span>
          </div>
          <div className="home-details-role">
            <span className="primary-text">
              {" "}
              <h1>
              <Typical/>
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
