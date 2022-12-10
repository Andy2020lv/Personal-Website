import React from "react";
import Navbar from "./components/Navbvar";
import Presentation from "./components/Presentation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectsData from "./components/ProjectsData";
function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Presentation />
      <Skills />
      {ProjectsData.map((project) => (
        <Projects
          title={project.title}
          description={project.description}
          img={project.img}
        />
      ))}
    </div>
  );
}

export default App;
