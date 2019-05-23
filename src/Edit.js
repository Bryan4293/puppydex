import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editName: "",
      editImg: "",
      editDesc: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  editChihuahua(e) {
    e.preventDefault();
    console.log(this.state);
    axios.put(`/api/chihuahua/${this.props.chi}`, {
        name: this.state.editName,
        image: this.state.editImg,
        description: this.state.editDesc
    }).then(response =>{this.props.updateChihuahuas(response.data)
        this.props.toggleEdit()
    })
  }

  render() {
  console.log(this.props.chi)

    return (
      <div>
        <form className="form-container">
          <h2>Edit: {this.props.chi}</h2>
          <h4>Name</h4>
          <input
            name="editName"
            value={this.state.editName}
            onChange={(e) => this.handleChange(e)}
          />

          <img className="card-image" />
          <h4>Picture URL</h4>
          <input
            name="editImg"
            value={this.state.editImg}
            onChange={(e) => this.handleChange(e)}
          />
          <h4>Description</h4>
          <input
            name="editDesc"
            value={this.state.editDesc}
            onChange={(e) => this.handleChange(e)}
          />
          <button
            onClick={e => {
              this.editChihuahua(e);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Edit;
