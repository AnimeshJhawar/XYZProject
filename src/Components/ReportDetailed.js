import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Hello extends Component{
  constructor() {
    super();
    this.state= {
     inputSize: 0
    }
   }
   
   handleOnChange(value){
   this.setState({
   inputSize: value.target.value
   });
   }
   
   renderInputs(value){
    const inputs=[];
    for(let i=1; i<=value; i++){
      inputs.push("Lockdown Period ",i,<b> Start Date </b>,<input type="date"/>,<b>End Date </b>,<input type="date"/>)
    }
    return inputs;
   }
   
    render() {
    console.log(this.state.inputSize);
      return (
      <div>
      <input type="number" name="quantity" min="0" max="99999" onChange={(value)=>this.handleOnChange(value)}/>
      <div>
      {this.renderInputs(this.state.inputSize)}
      </div>
      </div>
      );
    }
  }
  
  ReactDOM.render(
    <Hello name="World" />,
    document.getElementById('root')
  );