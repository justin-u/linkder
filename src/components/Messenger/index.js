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
        {/* <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        /> */}

        {/* <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        /> */}

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