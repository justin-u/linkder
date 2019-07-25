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
    // const messages = []

    this.state = {
      authUser: authUser,
      isLoggedIn: condition,
      messages: [
        {
          id: '',
          author: 'apple',
          message: '',
          timestamp: ''
        }
      ]
    };

    this.removeListener = null
    // this.messages =  []
    this.groupChatId = null
    // this.currentPeerUser = this.props.currentPeerUser
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
    if (newProps.currentPeerUser) {
      this.currentPeerUser = newProps.currentPeerUser
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
    // if (this.removeListener) {
    //   this.removeListener()
    // }

    this.props.firebase.messages(this.state.authUser.uid, "gIYF2LikSbdtwQYuq8exd0DKwGn1").on('value', snapshot => {
      const messageList = snapshot.val();

      const messageObject = Object.keys(messageList).map(key => ({
        ...messageList[key],
        messageID: key,
      }));

      for (var message of messageObject) {
        // console.log(message)
        // this.state.messages.push(message)

        this.state.messages.push({
          id: '',
          author: message.author,
          message: message.text,
          timestamp: message.time

        })

        // console.log(this.state.messages)
      }
    })

    console.log(this.state.messages)
  
    this.setState(prevState => {
      return {
        ...prevState,
        messages: [
          // {
          //   id: 1,
          //   author: 'apple',
          //   message: 'Hello world! Welcome to our chat feature! Hopefully get wrapped by our message bubble component! We will see how well it works.',
          //   timestamp: new Date().getTime()
          // },
          // {
          //   id: 2,
          //   author: 'orange',
          //   message: 'It looks great. Lets see what a reply looks like!',
          //   timestamp: new Date().getTime()
          // },
          // {
          //   id: 3,
          //   author: 'orange',
          //   message: 'We have worked hard as a team to build this app. Hope you like it',
          //   timestamp: new Date().getTime()
          // },
          // {
          //   id: 4,
          //   author: 'apple',
          //   message: 'We are a team of three amazingly talented and communicative individuals',
          //   timestamp: new Date().getTime()
          // },
          // {
          //   id: 5,
          //   author: 'apple',
          //   message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
          //   timestamp: new Date().getTime()
          // },
        ]
      };
    });
  }

  renderMessages() {
    let i = 0;
    let messageCount = this.state.messages.length;
    console.log(messageCount)
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

    console.log(messages)
    return messages;
  }

  render() {
    if (this.state.isLoggedIn) {
      const scope = this;

      return(
        <div className="message-list">
          <br/><br/><br/><br/><br/>
          <Toolbar
            title= {this.state.authUser.name}
            rightItems={[
              // <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
              // <ToolbarButton key="phone" icon="ion-ios-call" />,
              
              <Button style={{backgroundColor: "#007aff"}} variant="contained">
                <Link to={"/report/"+"MKJy2ZnYN3OQ3YbnZYxjVp7vsD32"+"/from/"+this.state.authUser} style={{color: '#ffffff', textDecoration: 'none'}}>Report</Link>
              </Button>,
              
              <Button style={{backgroundColor: "#007aff"}} variant="outlined">
                <Link to={"/u/"+"MKJy2ZnYN3OQ3YbnZYxjVp7vsD32"} style={{color: '#ffffff', textDecoration: 'none'}}>Schedule</Link>
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
          ]}/>
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