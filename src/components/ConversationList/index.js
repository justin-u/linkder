import React, { Component } from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import * as ROUTES from 'constants/routes';
import AWS from 'aws-sdk'
import { compose } from 'recompose'

import './ConversationList.css';
import { withFirebase } from '../Firebase';

var otherUser = null;

class ConversationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: [],
      conversations: []
    };
  }

  componentDidMount() {
    this.getMatches();
  }

  async getMatches() {
    return new Promise((resolve, reject) => {
      const authUser = JSON.parse(localStorage.getItem('authUser'));

      const payload = {
        'id': authUser.uid
      }

      const lambda = new AWS.Lambda()
      const scope = this;
      var x;

      lambda.invoke({
        FunctionName: 'getCurrentMatches-dev',
        Payload: JSON.stringify(payload)
      }, (err, data) => {
        if (err) {
          console.log(err)
        }
        else {
          // let matches = JSON.parse(data['Payload'])
          let matches = {
            currentMatches: [
              "D7q4mJiJaYgjlgJWXtv0gh1csJB2",
              "gIYF2LikSbdtwQYuq8exd0DKwGn1",
              "hBxDK1y6o4RbU8QOs8oo9vtrv2q2"
            ]
          }
          this.setState({ matches: matches['currentMatches'] });
          this.getConversations();
        }
      })
    })
  }

  getConversations = () => {

    const matches = this.state.matches;
    for (var match of matches) {
      this.props.firebase.user(match).on('value', snapshot => {
        // console.log(snapshot.val());
        var conversation = this.state.conversations;
        const conversationObject = snapshot.val();
        // console.log(conversationObject)
        if (conversationObject != null) {
          conversation.push({
            photo: conversationObject.imageURL || 'https://thispersondoesnotexist.com/image',
            name: conversationObject.name,
            text: "Click to view messages",
            uid: match
          })

          this.setState({ conversations: conversation })
        }
      })
    }
  }

  onConversationClick = (conversation) => {
    console.log(conversation)
    otherUser = conversation.uid;
    this.sendUID();
  }

  sendUID = () => {
    this.props.parentCallback(otherUser);
  }

  render() {
    // console.log(this.state);
    // console.log(this.state.conversations);
    return (
      <div className="conversation-list">
        <div style={{ "height": "53px", paddingTop: '120px' }}>
          <Toolbar style={{ "height": "53px", paddingTop: '80px' }}
            title="Your Matches"
            leftItems={[
              // <div><b>Home</b></div>
              <ToolbarButton key="home" icon="ion-ios-home" />,
              <ion-icon name="home"></ion-icon>
            ]}
            rightItems={[
              <ToolbarButton key="profile" icon="ion-ios-person" onClick={ROUTES.HOME}> </ToolbarButton>
            ]}
          />
          { /* <ConversationSearch /> */}
          {
            this.state.conversations.map(conversation =>
              <div
                onClick={e => this.onConversationClick(conversation)}
              >
                <ConversationListItem
                  key={conversation.name}
                  data={conversation}
                />
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default compose(withFirebase)(ConversationList);