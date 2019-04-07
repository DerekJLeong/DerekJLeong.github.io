import React, { Component } from "react";
import "./navbar.css";

class NavBar extends Component {
   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      this.state = {
         isNavOpen: false,
         width: 0
      };
   }

   componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
   }

   componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
   }

   updateWindowDimensions() {
      this.setState({ width: window.innerWidth });
   }

   handleClick() {
      this.setState({
         isNavOpen: !this.state.isNavOpen
      });
   }

   render() {
      const isNavOpen = this.state.isNavOpen;
      const viewWidth = this.state.width;

      let showToggle;

      // showToggle = isNavOpen ? "show" : null;
      showToggle = viewWidth >= 768 ? "show" : isNavOpen ? "show" : null;

      return (
         <React.Fragment>
            <div
               className={
                  this.state.isNavOpen ? "navButton close" : "navButton open"
               }
               onClick={this.handleClick}
            />
            <nav className={showToggle}>
               <a href="#about" onClick={this.handleClick}>
                  About
               </a>
               <a href="#projects" onClick={this.handleClick}>
                  Projects
               </a>
               <a href="#skills" onClick={this.handleClick}>
                  Skills
               </a>
               <a href="#contact" onClick={this.handleClick}>
                  Contact
               </a>
               <a href="http://derekjleong.tech/" onClick={this.handleClick}>
                  Resume
               </a>
            </nav>
         </React.Fragment>
      );
   }
}

export default NavBar;
