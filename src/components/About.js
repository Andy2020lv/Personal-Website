import React from "react";
import incognito from "../images/incognito.png";

export default function About() {
  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="300"
      id="about"
      className="about-container"
    >
      <h1 className="title">About</h1>
      <div className="about-elements">
        <img
          data-aos="slide-right"
          data-aos-once="true"
          data-aos-offset="250"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          alt="personal-img"
          src={incognito}
        ></img>
        <div
          data-aos="slide-left"
          data-aos-once="true"
          data-aos-offset="250"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="about-p"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            {" "}
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea.
          </p>
          <p>
            {" "}
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea.
          </p>
        </div>
      </div>
    </div>
  );
}
