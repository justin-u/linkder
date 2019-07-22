import React, { Component } from 'react';
import './Compose.css';

export default class Compose extends Component {
  constructor(props) {
    super(props)

    const authUser = JSON.parse(localStorage.getItem('authUser'));

    this.state = {
      authUser: authUser
    }
  }
  render() {
    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder={"Type a message, " + this.state.authUser.name.substring(0, this.state.authUser.name.indexOf(' ')) }
        />

        {
          this.props.rightItems
        }
      </div>
    );
  }
}