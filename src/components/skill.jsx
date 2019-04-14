import React, { Component } from "react";
import "./skills.css";
import Flip from "react-reveal/Flip";

class Skill extends Component {
   render() {
      const id = this.props.skill.id;
      let skill;
      skill =
         id % 2 === 0
            ? (skill = (
                 <Flip left>
                    <div className="skill even">
                       <ul>
                          {this.props.skill.details.map(detail => (
                             <li key={detail}>{detail}</li>
                          ))}
                       </ul>
                       <img
                          src={this.props.skill.img}
                          alt={this.props.skill.title}
                       />
                    </div>
                 </Flip>
              ))
            : (skill = (
                 <Flip right>
                    <div className="skill odd">
                       <img
                          src={this.props.skill.img}
                          alt={this.props.skill.title}
                       />
                       <ul>
                          {this.props.skill.details.map(detail => (
                             <li key={detail}>{detail}</li>
                          ))}
                       </ul>
                    </div>
                 </Flip>
              ));

      return <React.Fragment>{skill}</React.Fragment>;
   }
}

export default Skill;
