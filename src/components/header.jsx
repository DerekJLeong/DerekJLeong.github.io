import React, { Component } from "react";
import "./header.css";

class Header extends Component {
   state = {};
   render() {
      return (
         <header>
            <h2>Derek J Leong</h2>
            <h1>Front End Web Developer & Designer</h1>
            {/* href="#projectsID" */}
            <a href="http://derekjleong.tech/" target="_blank">
               <h2 className="viewPortfolio">View Portfolio</h2>
               <div className="downArrow" />
            </a>
         </header>
      );
   }
}

export default Header;
