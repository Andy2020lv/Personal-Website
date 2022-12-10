import React from "react";

export default function Projects(props) {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-element">
        <h1 className="project-title">{props.title}</h1>
        <div className="tech-stack">
          <div className="tech">MongoDB</div>
          <div className="tech">JS</div>
          <div className="tech">React</div>
        </div>
        <p>{props.description}</p>
        <button className="button">Source code</button>
        <img alt="projectImage" className="project-image" src={props.img}></img>
      </div>
    </div>
  );
}
