import React, { Component } from "react";
import "./navbar.css";

class NavBar extends Component {
   state = { isNavOpen: false };

   // handleCloseNavClick = () => {
   //    this.setState({isNavOpen: false});
   // }
   // handleOpenNavClick = () => {
   //    this.setState({isNavOpen: true});
   // }
   toggleNavStateClick() {
      let navState = this.state.isNavOpen;
      return navState === true ? false : true;
   }

   toggleNavClassNameClick() {
      let classes = "navButton ";
      classes += this.state.isNavOpen ? "open" : "close";
      return classes;
   }

   combinedToggleClick() {
      this.toggleNavStateClick();
      this.toggleNavClassNameClick();
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
            <button
               className="navButton close"
               onClick={this.combinedToggleClick()}
            />
            {nav}
         </React.Fragment>
      );
   }
}

export default NavBar;
