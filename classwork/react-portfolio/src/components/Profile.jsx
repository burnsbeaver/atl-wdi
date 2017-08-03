import React, { Component } from 'react';

const crazy = true;

class Profile extends Component {
  render() {
    return (
      <div>
        <img src={crazy ? "http://fillmurray.com/200/300" : "http://fillmurray.com/400/500"}/>
        <h1>Fill Murray</h1>
        <h3>Full Stack Developer</h3>
      </div>
    );
  }
}

export default Profile;
