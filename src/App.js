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
   render() {
      return (
         <React.Fragment>
            <Header />
            <NavBar />
            <main>
               <About />
               <Projects />
               <Skills />
               <Contact />
            </main>
            <Footer />
         </React.Fragment>
      );
   }
}

export default App;
