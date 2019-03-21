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
                 <a href="#overviewID">Overview</a>
                 <a href="#whatICanDoID">What I can do</a>
                 <a href="#projectsID">My Projects</a>
                 <a href="#contactID">Contact Me</a>
              </nav>
           ))
         : null;

      return (
         <React.Fragment>
            <div
               className={
                  this.state.isNavOpen ? "navButton open" : "navButton close"
               }
               onClick={this.handleClick}
            />
            {nav}
         </React.Fragment>
      );
   }
}

export default NavBar;
