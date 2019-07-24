import React, { Component } from 'react';
import './Compose.css';

export default class Compose extends Component {
  constructor(props) {
    super(props)

    const authUser = JSON.parse(localStorage.getItem('authUser'));

    this.state = {
      authUser: authUser,
      inputValue: ''
    }
  }

  onSendMessage = (content, type) => {
    if (content.trim() === '') {
      return
    }

    // const timestamp = moment()
    //   .valueOf()
    //   .toString()

    const itemMessage = {
      idFrom: this.authUser,
      idTo: this.currentPeerUser.id,
      content: content.trim(),
      type: type
    }

    // myFirestore
    //   .collection(AppString.NODE_MESSAGES)
    //   .doc(this.groupChatId)
    //   .collection(this.groupChatId)
    //   .set(itemMessage)
    //   .then(() => {
    //     this.setState({ inputValue: '' })
    //   })
  }

  onKeyboardPress = event => {
    if (event.key === 'Enter') {
      this.onSendMessage(this.state.inputValue, 0)
    }
  }

  render() {
    return (
      <div className="compose">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={event => {
            this.setState({ inputValue: event.target.value })
          }}
          className="compose-input"
          placeholder={"Type a message, " + this.state.authUser.name.substring(0, this.state.authUser.name.indexOf(' ')) }
          onKeyPress={this.onKeyboardPress}
        />

        {
          this.props.rightItems
        }
      </div>
    );
  }
}