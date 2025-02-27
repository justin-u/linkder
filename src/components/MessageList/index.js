import React, { Component } from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import Button from "components/CustomButtons/Button.jsx";
import { Link } from 'react-router-dom';
import withFirebase from '../Firebase';

import './MessageList.css';
import { withEmailVerification, withAuthorization } from '../Session';

// const MY_USER_ID = 'apple';

class MessageList extends Component {
  constructor(props) {
    super(props)

    const authUser = JSON.parse(localStorage.getItem('authUser'));
    const condition = authUser != null

    this.state = {
      authUser: authUser,
      isLoggedIn: condition,
      messages: [
        {
          id: '',
          author: 'apple',
          message: '',
          timestamp: '',
          otherUser: ""
        }
      ]
    };

    this.removeListener = null
  }

  componentDidMount() {
    this.getMessages();
  }

  componentWillUnmount() {
    if (this.removeListener) {
      this.removeListener()
    }
  }

  componentWillReceiveProps(newProps) {
    var otherUser = ""
    var otherUserName = ""

    if (this.props.otherUser) {
      otherUser = this.props.otherUser.id;
      otherUserName = this.props.otherUser.firstName;
    }

    if (newProps.otherUser) {
      this.otherUser = newProps.otherUser
      this.getMessages()
    }
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom = () => {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({})
    }
  }

  getMessages = () => {
    const scope = this;
    this.props.firebase.messages(this.state.authUser.uid, "L1aoxBNR4KOx5JfTsKlwLsnuPds1").on('value', snapshot => {
      const messageList = snapshot.val();

      if (messageList != null) {
        const messageObject = Object.keys(messageList).map(key => ({
          ...messageList[key],
          messageID: key,
        }));

        console.log(messageList);

        for (var message of messageObject) {
          // console.log(message)
          const author = message.author
          const text = message.text;
          const time = new Date(message.time).getTime()
          // console.log(time);
          // this.state.messages.push(message)
          var m = scope.state.messages;
          m.push({
            author: author,
            message: text,
            timestamp: time
          })
          scope.setState({
            messages: m
          });
        }
      }
    })

    this.setState(prevState => {
      return {
        ...prevState, messages: []
      }
    })
  }

  renderMessages() {
    let i = 0;
    let messageCount = this.state.messages.length;
    // console.log(messageCount)
    let messages = [];

    while (i < messageCount) {
      let previous = this.state.messages[i - 1];
      let current = this.state.messages[i];
      let next = this.state.messages[i + 1];
      let isMine = current.author === this.state.authUser.uid;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      messages.push(
        <Message
          // authUser={authUser}
          // key={message.uid}
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    // console.log(messages)
    return messages;
  }

  render() {
    console.log(this.props);
    var otherUser = {
      id: "",
      firstName: "",
      lastName: ""
    }
    if (this.props.otherUser)
      otherUser = this.props.otherUser;

    if (this.state.isLoggedIn) {
      const scope = this;

      return (
        <div className="message-list">
          <br /><br /><br /><br /><br />
          <Toolbar
            title={otherUser.firstName + " " + otherUser.lastName}
            rightItems={[
              <Button style={{ backgroundColor: "#007aff" }} variant="contained">
                <Link to={"/report/" + otherUser.id + "/from/" + this.state.authUser.uid} style={{ color: '#ffffff', textDecoration: 'none' }}>Report</Link>
              </Button>,

              <Button style={{ backgroundColor: "#007aff" }} variant="outlined">
                <Link to={"/u/" + otherUser.id} style={{ color: '#ffffff', textDecoration: 'none' }}>Schedule</Link>
              </Button>
            ]}
          />

          <div className="message-list-container">{this.renderMessages()}</div>

          <Compose rightItems={[
            <ToolbarButton key="photo" icon="ion-ios-camera" />,
            <ToolbarButton key="image" icon="ion-ios-image" />,
            <ToolbarButton key="audio" icon="ion-ios-mic" />,
            <ToolbarButton key="money" icon="ion-ios-card" />,
            <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
            <ToolbarButton key="emoji" icon="ion-ios-happy" />
          ]} otherUser={otherUser.id}/>
        </div>
      );
    }

    else {
      return (<div style={{ paddingTop: '50px' }}>
        <h1>You need to be signed in to view this</h1>
      </div>)
    }
  }
}

const condition = authUser => !!authUser;

export default (
  withFirebase,
  withEmailVerification,
  withAuthorization(condition)
)(MessageList)