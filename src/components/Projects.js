import React from "react";

export default function Projects(props) {
  return (
    <div className="project-element">
      <div
        data-aos="slide-right"
        data-aos-once="true"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="project-info"
      >
        <h1 className="project-title">{props.title}</h1>
        <div className="tech-stack">
          <div className="tech">MongoDB</div>
          <div className="tech">JS</div>
          <div className="tech">React</div>
        </div>
        <p>{props.description}</p>
        <button className="button">Source code</button>
      </div>
      <div
        data-aos="slide-left"
        data-aos-once="true"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="project-img-container"
      >
        <img alt="projectImage" className="project-image" src={props.img}></img>
      </div>
    </div>
  );
}
