import React, { Component } from "react";
import "./about.css";

class About extends Component {
   state = {};
   render() {
      return (
         <section className="about">
            <h1>About</h1>
            <div className="aboutImage" />
            <h2>Hi, my name is Derek and I’m a front end developer.</h2>
            <h3>
               My passion for programming and technology goes back nearly a
               decade.
            </h3>
            <p>
               First, falling in love with computers, after building one in
               middle school, and later programming, after taking an
               introduction course in high school. I attended CSULB for Computer
               Science for 2 years, after which prompted me to complete a front
               end development coding bootcamp with Udacity.
            </p>
            <p>
               Recently teaching myself ReactJS, I enjoy spending my free time
               honing and expanding my craft.
            </p>
            <h3>There is always more to learn.</h3>
         </section>
      );
   }
}

export default About;
