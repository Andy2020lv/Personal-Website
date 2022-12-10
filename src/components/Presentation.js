import React from "react";

export default function Presentation() {
  return (
    <div className="presentation colored">
      <h1
        data-aos="fade-zoom-in"
        data-aos-offset="400"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
        className="presentation-text"
      >
        Hi, I'm <strong>Andy</strong>{" "}
      </h1>
      <h1
        data-aos="fade-zoom-in"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        A full stack web developer.
      </h1>
      <div className="icons">
        <i class="fa-brands fa-github"></i>
        <i class="fa-solid fa-file"></i>
      </div>
    </div>
  );
}
