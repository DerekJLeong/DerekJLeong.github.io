import React, { Component } from "react";
import Project from "./project";
import "./projects.css";
import ScrollableAnchor from "react-scrollable-anchor";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

class Projects extends Component {
   render() {
      return (
         <section className="projects">
            <Slide right>
               <h1>Projects</h1>
            </Slide>

            <ScrollableAnchor id={"projects"}>
               <span />
            </ScrollableAnchor>

            <Fade right>
               <p>
                  Here are some of my recent projects. Select a project if you'd
                  like to see a demo or visit the GitHub repository.
               </p>
            </Fade>
            {this.props.projects.map(project => (
               <Project key={project.id} project={project} />
            ))}
         </section>
      );
   }
}

export default Projects;
