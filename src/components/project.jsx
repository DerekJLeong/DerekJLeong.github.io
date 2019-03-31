import React, { Component } from "react";
import "./project.css";

class Project extends Component {
   render() {
      return (
         <div className="projectContainer">
            <div className="project">
               <div className="projectHeader">
                  <span class="headerDot dot1" />
                  <span class="headerDot dot2" />
                  <span class="headerDot dot3" />
                  <h2>{this.props.project.title}</h2>
               </div>
               <img src={this.props.project.img} alt="project" />
            </div>
            <p>{this.props.project.description}</p>
         </div>
      );
   }
}

export default Project;
