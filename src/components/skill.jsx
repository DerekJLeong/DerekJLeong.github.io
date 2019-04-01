import React, { Component } from "react";
import "./skills.css";

class Skill extends Component {
   render() {
      const id = this.props.skill.id;
      let skill;
      skill =
         id % 2 === 0
            ? (skill = (
                 <div className="skill">
                    <ul>
                       {this.props.skill.details.map(detail => (
                          <li>{detail}</li>
                       ))}
                    </ul>
                    <img
                       src={this.props.skill.img}
                       alt={this.props.skill.title}
                    />
                 </div>
              ))
            : (skill = (
                 <div className="skill">
                    <img
                       src={this.props.skill.img}
                       alt={this.props.skill.title}
                    />
                    <ul>
                       {this.props.skill.details.map(detail => (
                          <li>{detail}</li>
                       ))}
                    </ul>
                 </div>
              ));

      return <React.Fragment>{skill}</React.Fragment>;
   }
}

export default Skill;
