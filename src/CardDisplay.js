import React, { Component } from "react";
import "./App.css";

class CardDisplay extends Component {
  render() {
    let chihuahuasList = this.props.chihuahuas.map((element, index) => {
      return (
        <div key={index} className="card">
          <h2>{element.name}</h2>
          <img className="card-image" src={element.image} />
          <h4>{element.description}</h4>
        </div>
      );
    });
    return <div className="card-container">{chihuahuasList}</div>;
  }
}

export default CardDisplay;
