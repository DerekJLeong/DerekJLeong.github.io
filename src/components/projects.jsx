import React, { Component } from "react";
import Project from "./project";
import "./projects.css";

class Projects extends Component {
   render() {
      return (
         <section className="projects">
            <h1>Projects</h1>
            <p>Insert Text Here</p>
            {this.props.projects.map(project => (
               <Project key={project.id} project={project} />
            ))}
            <div className="bar" />
         </section>
      );
   }
}

export default Projects;
