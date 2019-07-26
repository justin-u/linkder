import React, { Component } from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';

export default class Messenger extends Component {

  constructor(props) {
    super(props);
    this.state = {
      otherUser: null
    }
  }

  callbackFunction = (uid) => {
    this.setState({otherUser: uid});
  }

  render() {
    return (
      <div className="messenger">
        <div className="scrollable sidebar">
          <ConversationList parentCallback = {this.callbackFunction}/>
        </div>

        <div className="scrollable content">
          <MessageList otherUser={this.state.otherUser}/>
        </div>
      </div>
    );
  }
}