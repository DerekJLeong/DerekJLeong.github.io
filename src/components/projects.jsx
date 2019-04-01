import React, { Component } from "react";
import Project from "./project";

class projects extends Component {
   render() {
      return (
         <section className="projects">
            <h1>Projects</h1>
            {this.props.projects.map(project => (
               <Project key={project.id} project={project} />
            ))}
            <div className="bar" />
         </section>
      );
   }
}

export default projects;
