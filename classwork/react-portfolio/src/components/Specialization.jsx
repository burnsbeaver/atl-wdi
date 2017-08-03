import React, { Component } from 'react';

class Specialization extends Component {
  render(){
    return (
      <div>
        <div>
          <h3>{this.props.language}</h3>
          <img height="150" width="150" className = "App-logo" src= {this.props.image}/>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default Specialization
