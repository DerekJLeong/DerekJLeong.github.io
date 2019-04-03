import React, { Component } from "react";
import "./contact.css";
import ScrollableAnchor from "react-scrollable-anchor";

class Contact extends Component {
   render() {
      return (
         <section className="contact">
            <ScrollableAnchor id={"contact"}>
               <h1>Contact</h1>
            </ScrollableAnchor>
            <p>
               Interested in working with me?
               <br />
               Just want to talk tech?
               <br />
               Need help or have any questions?
               <br />
            </p>
            <p>
               Below are various methods that you can use to connect with me,
               including a PDF download for my resume. I look forward to hearing
               from you, cheers!
            </p>
            <ul className="contactList">
               <a
                  href="mailto:derekjleong@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <li className="contactHover">
                     <img src={require("./images/email.svg")} alt="Email" />
                  </li>
               </a>
               <a
                  href="https://www.linkedin.com/in/derekjleong/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <li className="contactHover">
                     <img
                        src={require("./images/linkedin.svg")}
                        alt="LinkedIn"
                     />
                  </li>
               </a>
               <a
                  href="https://github.com/DerekJLeong"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <li className="contactHover">
                     <img src={require("./images/github.svg")} alt="GitHub" />
                  </li>
               </a>
               <a
                  href="mailto:derekjleong@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <li className="contactHover">
                     <img
                        src={require("./images/download.svg")}
                        alt="Resume PDF"
                     />
                  </li>
               </a>
            </ul>
         </section>
      );
   }
}

export default Contact;
