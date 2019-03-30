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
            description: "",
            img: require("./components/images/portfolioProject.png"),
            link: ""
         },
         {
            id: 2,
            title: "Concentration Game",
            description: "",
            img: require("./components/images/concentrationProject.png"),
            link: ""
         },
         {
            id: 3,
            title: "Restuarant Review Application",
            description: "",
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
