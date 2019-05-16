// //////APP DISPLAY CLASS COMPONENT//////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// import React, { Component } from "react";
// import CardDisplay from "./CardDisplay";
// import "./App.css";
// import Chihuahuas from "./chihuahuas";
// import NavBar from "./NavBar";
// import Form from "./Form";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       chihuahuas: Chihuahuas,
//       nameInput: "",
//       imageInput: "",
//       descriptionInput: ""
//     };
//     // bind the handleChange functions (for the inputs in the form)
//     this.handleName = this.handleName.bind(this);
//     this.handleImage = this.handleImage.bind(this);
//     this.handleDescription = this.handleDescription.bind(this);
//   }

//   //createCard function needs to be in the parent component so that 
//   createCard(e) {
//     e.preventDefault();

//     this.setState({
//       chihuahuas: [
//         ...this.state.chihuahuas,
//         {
//           name: this.state.nameInput,
//           image: this.state.imageInput,
//           description: this.state.descriptionInput
//         }
//       ]
//     });
//   }

//   //change handlers for the inputs in the form need to be in the parent component because we need the input data to enter into chihuahuas

//   handleName(val) {
//     this.setState({ nameInput: val });
//   }
//   handleImage(val) {
//     this.setState({ imageInput: val });
//   }
//   handleDescription(val) {
//     this.setState({ descriptionInput: val });
//   }

//   render() {
//     return (
//       <div className='App'>
//         <NavBar />
//         <Form
//           handleName={this.handleName}
//           handleImage={this.handleImage}
//           handleDescription={this.handleDescription}
//           createCard={e => this.createCard(e)}
//         />
//         <CardDisplay className="card-container" chihuahuas={this.state.chihuahuas} />
//       </div>
//     );
//   }
// }

// export default App;


//////CARD DISPLAY CLASS COMPONENT//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


// import React, { Component } from "react";
// import "./App.css";

// class CardDisplay extends Component{

// render(){

//     let chihuahuasList = this.props.chihuahuas.map((element, index)=>{
//         return(
//             <div key={index} className= 'card'>
//             <h2>{element.name}</h2>
//             <img className='card-image' src={element.image}/>
//             <h4>{element.description}</h4>

//             </div>
//         )
//     })
//     return(
//         <div className='card-container'>
// {chihuahuasList}
//         </div>
//     )
// }}

// export default CardDisplay




//////CARD DISPLAY FUNCTIONAL COMPONENT///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// function CardDisplay(props) {
//   return props.chihuahuas.map((element, index) => {
//     return (

//         <div  key={index} className="card">
//           <h2>{element.name}</h2>
//           <img className="card-image" src={element.image} alt={'chihuahua'} />
//           <h4>{element.description}</h4>
 
//       </div>
  
//     );
//   });
// }
// export default CardDisplay;


//////FORM  COMPONENT///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////



// import React, {Component} from 'react'
// import "./App.css"

// class Form extends Component {
   
// render(){

//     return(
//         <div className="form-component">
//         <form className="form-container">
//         <h3>Create New Card</h3>
//         <br/>
//         <h4>Name</h4>
//         <input onChange={(e)=>{this.props.handleName(e.target.value)}}/>
//         <h4>Picture URL</h4>
//         <input onChange={(e)=>{this.props.handleImage(e.target.value)}}/>
//         <h4>Description</h4>
//         <input onChange={(e)=>{this.props.handleDescription(e.target.value)}}/>
//         <br/>
//         <button onClick={(e)=>this.props.createCard(e)} className="submit-puppy-button">Submit</button>
 
//         </form>
//         </div>
//     )
// }
// }

// export default Form