import React, { Component } from "react";
import "./about.css";
import placeholder from "./images/placeholder.png";
import ScrollableAnchor from "react-scrollable-anchor";

class About extends Component {
   render() {
      return (
         <section className="about">
            <ScrollableAnchor id={"about"}>
               <h1>About</h1>
            </ScrollableAnchor>
            <img src={placeholder} className="placeholder" alt="placeholder" />
            <h2>Hi, my name is Derek and I’m a Front End Developer.</h2>
            <p>
               With have long standing love for programming and technology, my
               work truly is my passion.
            </p>
            <p>
               Backed by 3 years of computer science and programming education,
               as well as completion of Udacity's Front End Nanodegree Program.
               I am educated in both modern techniques and industry standards.
               You can find me improving my development abilities in my free
               time.
            </p>
            <p>
               I'm always looking for an opportunity to put the proof in the
               pudding. Currently located in Los Angles, CA. I am available for
               work both remote and on site. Let's bring your ideas to life!
            </p>
            <h2 className="colored">There is always more to be learned.</h2>
         </section>
      );
   }
}

export default About;
