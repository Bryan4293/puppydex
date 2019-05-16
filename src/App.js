import React, { Component } from "react";
import CardDisplay from "./CardDisplay";
import "./App.css";
import Chihuahuas from "./chihuahuas";
import NavBar from "./NavBar";
import Form from "./Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chihuahuas: Chihuahuas,
      nameInput: "",
      imageInput: "",
      descriptionInput: ""
    };
    // bind the handleChange functions (for the inputs in the form)
    this.handleName = this.handleName.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }

  //createCard function needs to be in the parent component so that 
  createCard(e) {
    e.preventDefault()

    this.setState({
      chihuahuas: [
        ...this.state.chihuahuas,
        {
          name: this.state.nameInput,
          image: this.state.imageInput,
          description: this.state.descriptionInput
        }
      ]
    });
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
    console.log(this.state.nameInput)
    return (
      <div className='App'>
        <NavBar />
        <Form
          handleName={this.handleName}
          handleImage={this.handleImage}
          handleDescription={this.handleDescription}
          createCard={e=>this.createCard(e)}
        />
        <CardDisplay chihuahuas={this.state.chihuahuas} />
      </div>
    );
  }
}

export default App;
