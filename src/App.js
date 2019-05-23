import React, { Component } from "react";
import CardDisplay from "./CardDisplay";
import "./App.css";
// import Chihuahuas from "./chihuahuas";
import NavBar from "./NavBar";
import Form from "./Form";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chihuahuas: [],
      nameInput: "",
      imageInput: "",
      descriptionInput: ""
    };
    // bind the handleChange functions (for the inputs in the form)
    this.handleName = this.handleName.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.updateChihuahuas = this.updateChihuahuas.bind(this);

  }

  componentDidMount() {
    axios.get("/api/chihuahuas").then(response => {
      this.setState({ chihuahuas: response.data });
    });
  }

  updateChihuahuas(update) {
    console.log(update);
    this.setState({ chihuahuas: update });
  }

  //createCard function needs to be in the parent component so that
  createCard(e) {
    e.preventDefault();
    axios
      .post("/api/chihuahuas", {
        name: this.state.nameInput,
        image: this.state.imageInput,
        description: this.state.descriptionInput
      })
      .then(response => {
        this.setState({ chihuahuas: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  

  //change handlers for the inputs in the form need to be in the parent component because we need the input data to enter into chihuahuas

  handleName(val) {
    this.setState({ nameInput: val });
  }
  handleImage(val) {
    this.setState({ imageInput: val });
  }
  handleDescription(val) {
    this.setState({ descriptionInput: val });
  }

  render() {
    console.log(this.state.nameInput);
    return (
      <div className="App">
        <NavBar />
        <Form
          handleName={this.handleName}
          handleImage={this.handleImage}
          handleDescription={this.handleDescription}
          createCard={e => this.createCard(e)}
        />
        <CardDisplay
          chihuahuas={this.state.chihuahuas}
          updateChihuahuas={this.updateChihuahuas}
        />
      </div>
    );
  }
}

export default App;
