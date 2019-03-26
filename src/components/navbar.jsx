import React, { Component } from "react";
import "./navbar.css";

class NavBar extends Component {
   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
         isNavOpen: false
      };
   }

   handleClick() {
      this.setState({
         isNavOpen: !this.state.isNavOpen
      });
   }

   render() {
      const isNavOpen = this.state.isNavOpen;
      let nav;

      nav = isNavOpen
         ? (nav = (
              <nav>
                 <a href="#about">About</a>
                 <a href="#projects">Projects</a>
                 <a href="#skills">Skills</a>
                 <a href="#contact">Contact</a>
                 <a href="#">Resume</a>
              </nav>
           ))
         : null;

      return (
         <React.Fragment>
            <div
               className={
                  this.state.isNavOpen ? "navButton close" : "navButton open"
               }
               onClick={this.handleClick}
            />
            {nav}
         </React.Fragment>
      );
   }
}

export default NavBar;
