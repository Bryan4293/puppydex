import React, { Component } from "react";
// import FakeComponent from "./FakeComponent";
// import "./App.css";

// class CardDisplay extends Component {
//   render() {
//     let chihuahuasList = this.props.chihuahuas.map((element, index) => {
//       return (
//         <div key={index} className="card">
//           <h2>{element.name}</h2>
//           <img alt="chihuahua" className="card-image" src={element.image} />
//           <h4>{element.description}</h4>
//         </div>
//       );
//     });

//     return (
//       <div className="card-container">
//         {chihuahuasList}
//         <FakeComponent chihuahuas={this.props.chihuahuas} />
//       </div>
//     );
//   }
// }

// export default CardDisplay;


////FUNCTIONAL COMPONENT///////////

function CardDisplay(props) {
    return props.chihuahuas.map((element, index) => {
      return (
     
          <div  key={index} className="card">
            <h2>{element.name}</h2>
            <img className="card-image" src={element.image} alt={'chihuahua'} />
            <h4>{element.description}</h4>

        </div>
  

      );
    });
  }
  export default CardDisplay;
