import React, { Component } from 'react';
import { AuthUserContext, withAuthorization, withEmailVerification } from '../Session';
import './Compose.css';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

class Compose extends Component {
  constructor(props) {
    super(props)

    const authUser = JSON.parse(localStorage.getItem('authUser'));

    this.state = {
      authUser: authUser,
      inputValue: ''
    }
  }

  onSendMessage = () => {
    console.log(this.state.inputValue);
    this.props.firebase.messages(this.state.authUser.uid, "L1aoxBNR4KOx5JfTsKlwLsnuPds1").push({
      text: this.state.inputValue,
      author: this.state.authUser.uid,
      time: new Date().getTime()
    }).then(() => {
        this.setState({ inputValue: this.state.inputValue })
    })
  }

onChange = event => {
    this.setState({ inputValue: event.target.value })
}

  onKeyboardPress = event => {
    if (event.key === 'Enter') {
      this.onSendMessage()
    }
  }

  render() {
    return (
      <div className="compose">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.onChange.bind(this)}
          className="compose-input"
          placeholder={"Type a message, " + this.state.authUser.name.substring(0, this.state.authUser.name.indexOf(' '))}
          onKeyPress={this.onKeyboardPress.bind(this)}
        />

        {
          this.props.rightItems
        }
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withEmailVerification,
  withAuthorization(condition),
  )(Compose)
