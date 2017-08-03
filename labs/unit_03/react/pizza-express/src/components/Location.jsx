import React, { Component } from 'react';

class Location extends Component {
  render(){
    return (
      <div className="location">
        <div>{this.props.name}</div>
        <div>{this.props.address}</div>
        <div>{this.props.phone}</div>
      </div>
    )
  }
}

export default Location
