import React, { Component } from "react";
import Skill from "./skill";
import "./skills.css";

class Skills extends Component {
   render() {
      return (
         <section>
            <h1>Skills</h1>
            <p>
               As a life long learner and seeker of knowledge, I enjoy spending
               my time honing and expanding my capabilities.
            </p>
            {this.props.skills.map(skill => (
               <Skill key={skill.id} skill={skill} />
            ))}
         </section>
      );
   }
}

export default Skills;
