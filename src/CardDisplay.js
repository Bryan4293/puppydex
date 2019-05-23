import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Edit from "./Edit";

class CardDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      chi: ""
    };
    this.editChi = this.editChi.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  editChi(name) {
    this.setState({ edit: true, chi: name });
  }

  deleteChi(name) {
    console.log(name);
    axios.delete(`/api/chihuahua/${name}`).then(response => {
      console.log(response);
      this.props.updateChihuahuas(response.data);
    });
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    let chihuahuasList = this.props.chihuahuas.map((element, index) => {
      return (
        <div key={index} className="card">
          <h2>{element.name}</h2>
          <img className="card-image" src={element.image} />
          <h4>{element.description}</h4>
          {/* <button onClick = {e => {this.editChi}}>Edit</button> */}
          <button onClick={() => this.deleteChi(element.name)}>Delete</button>
          <button onClick={() => this.editChi(element.name)}>Edit</button>
        </div>
      );
    });
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div className="card-container">{chihuahuasList}</div>
        {this.state.edit === true ? (
          <Edit
            toggleEdit={this.toggleEdit}
            updateChihuahuas={this.props.updateChihuahuas}
            chi={this.state.chi}
          />
        ) : null}
      </div>
    );
  }
}

export default CardDisplay;
