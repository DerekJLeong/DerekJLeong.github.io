import React, { Component } from "react";
import Header from "./components/header";
import NavBar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
   state = {
      projects: [
         {
            id: 1,
            title: "Portfolio Site V1",
            description:
               "My original portfolio site, made using vanilla HTML, CSS, and JavaScript. Rebuilt and designed after discoving ReactJS to display new abilities.",
            img: require("./components/images/portfolioProject.png"),
            link: ""
         },
         {
            id: 2,
            title: "Concentration Memory Game",
            description:
               "Based off of the classic game 'Concentration'. Demonstration of JavaScript DOM manipulation, event handling, and CSS animations.",
            img: require("./components/images/concentrationProject.png"),
            link: ""
         },
         {
            id: 3,
            title: "Restuarant Review Application",
            description:
               "1 of 8 projects completed for Udacity Front End Nanodegree. Responsible for responsive redesign using CSS flex box/grid, ARIA accessibility, and service worker offline caching for multi-page application.",
            img: require("./components/images/restuarantProject.png"),
            link: ""
         }
      ]
   };
   render() {
      return (
         <React.Fragment>
            <Header />
            <NavBar />
            <main>
               <About />
               <Projects projects={this.state.projects} />
               <Skills />
               <Contact />
            </main>
            <Footer />
         </React.Fragment>
      );
   }
}

export default App;
