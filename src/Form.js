

import React, {Component} from 'react'
import "./App.css"

class Form extends Component {
   
render(){

    return(
        <div className="form-component">
        <form className="form-container">
        <h3>Create New Card</h3>
        <br/>
        <h4>Name</h4>
        <input onChange={(e)=>{this.props.handleName(e.target.value)}}/>
        <h4>Picture URL</h4>
        <input onChange={(e)=>{this.props.handleImage(e.target.value)}}/>
        <h4>Description</h4>
        <input onChange={(e)=>{this.props.handleDescription(e.target.value)}}/>
        <br/>
        <button onClick={(e)=>this.props.createCard(e)} className="submit-puppy-button">Submit</button>
 
        </form>
        </div>
    )
}
}

export default Form