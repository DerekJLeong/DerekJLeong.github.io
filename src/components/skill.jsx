import React, { Component } from "react";
import "./skills.css";

class Skill extends Component {
   render() {
      return (
         <div className="htmlContainer">
            <h2>{this.props.skill.title}</h2>
            <img src={this.props.skill.img} alt="Skill" />
            <ul>
               {this.props.skill.details.map(detail => (
                  <li>{detail}</li>
               ))}
            </ul>
         </div>
      );
   }
}

export default Skill;
