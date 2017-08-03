import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    return (
      <div className="navbar">
        <a href="#">Our Story</a>
        <a href="#">Menu</a>
        <h2>PIZZA-EXPRESS</h2>
        <a href="#">Locations</a>
        <a href="#">Contact</a>
      </div>
    )
  }
}

export default NavBar
