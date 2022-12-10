import React from "react";
import Navbar from "./components/Navbvar";
import Presentation from "./components/Presentation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectsData from "./components/ProjectsData";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid">
      <Navbar />
      <Presentation />
      <Skills />
      <div
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        id="projects"
        className="projects"
      >
        <h1 className="title">Projects</h1>
        {ProjectsData.map((project) => (
          <Projects
            title={project.title}
            description={project.description}
            img={project.img}
          />
        ))}
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
