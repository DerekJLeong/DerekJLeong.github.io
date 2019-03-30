import React, { Component } from "react";
import "./project.css";

class Project extends Component {
   render() {
      return (
         <div>
            <h2>{this.props.project.title}</h2>
            <img src={this.props.project.img} alt="project" />
         </div>
      );
   }
}

export default Project;
