import React, { Component } from "react";
import Skill from "./skill";
import "./skills.css";
import ScrollableAnchor from "react-scrollable-anchor";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

class Skills extends Component {
   render() {
      return (
         <section className="skills">
            <ScrollableAnchor id={"skills"}>
               <Slide left>
                  <h1>Skills</h1>
               </Slide>
            </ScrollableAnchor>
            <Fade left>
               <p>
                  As a life long learner and seeker of knowledge, I enjoy honing
                  and expanding my capabilities in my spare time. The following
                  are reasons why you may consider working with me.
               </p>
            </Fade>

            {this.props.skills.map(skill => (
               <Skill key={skill.id} skill={skill} />
            ))}
         </section>
      );
   }
}

export default Skills;
