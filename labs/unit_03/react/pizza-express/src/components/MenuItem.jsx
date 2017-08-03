import React, { Component } from 'react';

class MenuItem extends Component {
  render(){
    return (
      <div className="menu-item">
        <img  src={this.props.image}/>
        <div>
          <div classname="menu-item-name">{this.props.name}</div>
          <div>{this.props.price}</div>
          <div className="menu-description">{this.props.description}</div>
        </div>
      </div>
    )
  }
}

export default MenuItem
