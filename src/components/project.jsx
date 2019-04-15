import React, { Component } from "react";
import "./projects.css";
import Flip from "react-reveal/Flip";

class Project extends Component {
   render() {
      return (
         <Flip top>
            <div className={this.getContainerClass()}>
               <div className="project">
                  <div className="projectHeader">
                     <span className="headerDot dot1" />
                     <span className="headerDot dot2" />
                     <span className="headerDot dot3" />
                     <h2>{this.props.project.title}</h2>
                  </div>
                  <img src={this.props.project.img} alt="project" />
                  <div className={this.getTargetClasses()}>
                     <h2>{this.props.project.title}</h2>
                     <ul>
                        <a href={this.props.project.demo}>
                           <li>Demo</li>
                        </a>
                        <a href={this.props.project.github}>
                           <li>GitHub</li>
                        </a>
                     </ul>
                  </div>
               </div>
               <p>{this.props.project.description}</p>
            </div>
         </Flip>
      );
   }

   getContainerClass() {
      let containerClass = "projectContainer hoverContainer-";
      containerClass += this.props.project.id;
      return containerClass;
   }

   getTargetClasses() {
      let targetClasses = "projectHover hoverTarget-";
      targetClasses += this.props.project.id;
      return targetClasses;
   }
}

export default Project;
