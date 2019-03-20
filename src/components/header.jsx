import React, { Component } from "react";
import HeaderBackground from "./headerBackground";
import "./header.css";

class Header extends Component {
   state = {};
   render() {
      return (
         <header>
            <h2>Derek J Leong</h2>
            <h1>Front End Developer</h1>
            {/* href="#projects" */}
            <a href="http://derekjleong.tech/" target="_blank">
               <h2 className="viewPortfolio">View Portfolio</h2>
               <div className="downArrow" />
            </a>
            <HeaderBackground />
         </header>
      );
   }
}

export default Header;
