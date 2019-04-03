import React, { Component } from "react";
import Project from "./project";
import "./projects.css";
import ScrollableAnchor from "react-scrollable-anchor";

class Projects extends Component {
   render() {
      return (
         <section className="projects">
            <ScrollableAnchor id={"projects"}>
               <h1>Projects</h1>
            </ScrollableAnchor>
            <p>
               Here are some of my recent projects. Select a project if you'd
               like to see a demo or visit the GitHub repository.
            </p>
            {this.props.projects.map(project => (
               <Project key={project.id} project={project} />
            ))}
         </section>
      );
   }
}

export default Projects;
