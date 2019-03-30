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
            <p>
               My passion for programming and technology goes back nearly a
               decade.
            </p>
            <p>
               First, falling in love with computers, after building one in
               middle school, and later programming, after taking an
               introduction course in high school. I enrolled at CSULB as a
               Computer Science major for 2 years, after which prompted me to
               complete a front end developmer bootcamp with Udacity.
            </p>
            <p>
               Recently teaching myself ReactJS, I enjoy spending my free time
               honing and expanding my skill set.
            </p>
            <h2 className="colored">There is always more to learn.</h2>
         </section>
      );
   }
}

export default About;
