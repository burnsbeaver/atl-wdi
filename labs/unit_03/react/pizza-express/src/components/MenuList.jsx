import React, { Component } from 'react';
import MenuItem from './MenuItem';
import PizzaData from '../pizzaData'

class MenuList extends Component {
  render() {
    return (
      <div className="menu">
        <h1>Menu</h1>
        <div className="menu-container">
          {PizzaData.map((pizza, i) => {
            return <MenuItem key={i} name={pizza.name} price={pizza.price} description={pizza.description} image={pizza.image}/>
          })}
        </div>
      </div>
    )
  }
}

export default MenuList
