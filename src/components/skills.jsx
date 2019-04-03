import React, { Component } from "react";
import Skill from "./skill";
import "./skills.css";
import ScrollableAnchor from "react-scrollable-anchor";

class Skills extends Component {
   render() {
      return (
         <section className="skills">
            <ScrollableAnchor id={"skills"}>
               <h1>Skills</h1>
            </ScrollableAnchor>

            <p>
               As a life long learner and seeker of knowledge, I enjoy honing
               and expanding my capabilities in my spare time.
            </p>
            {this.props.skills.map(skill => (
               <Skill key={skill.id} skill={skill} />
            ))}
         </section>
      );
   }
}

export default Skills;
