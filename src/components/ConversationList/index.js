import React, { Component } from 'react';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import * as ROUTES from 'constants/routes';
import * as ROLES from 'constants/roles';
import AWS from 'aws-sdk'

import './ConversationList.css';

export default class ConversationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: []
    };
  }

  componentDidMount() {
    this.getConversations();
  }

  getConversations = () => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));

    const payload = {
      'id': authUser.uid,
    }
    const conversations = []
    const lambda = new AWS.Lambda()
    lambda.invoke({
      FunctionName: 'getCurrentMatches-dev',
      Payload: JSON.stringify(payload)
    }, function (err, data) {

      var conv = JSON.parse(data['Payload'])
      console.log(conv)

    })
    
    // this.setState(prevState => {
    //   let conversations = {
    //     photo: 
    //   }
    // })

    axios.get('https://randomuser.me/api/?results=20').then(response => {
      this.setState(prevState => {
        let conversations = response.data.results.map(result => {
          return {
            photo: result.picture.large,
            name: `${result.name.first} ${result.name.last}`,
            text: 'Hello! I am a student at Purdue Univeristy. Would you like to meet me? (This is a long message that needs to be truncated.)'
          };
        });

        return { ...prevState, conversations };
      });
    });
  }

  render() {
    return (
      <div className="conversation-list">
        <div style={{ "height": "53px", paddingTop: '120px' }}>
          <Toolbar style={{ "height": "53px", paddingTop: '80px' }}
            title="Your Matches"
            leftItems={[
              // <div><b>Home</b></div>
              // <ToolbarButton key="home" icon="ion-ios-home" />
              <ion-icon name="home"></ion-icon>
            ]}
            rightItems={[
              <ToolbarButton key="profile" icon="ion-ios-person" onClick={ROUTES.HOME}> </ToolbarButton>
            ]}
          />
        { /* <ConversationSearch /> */ }
        {
          this.state.conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>
      </div>
    );
  }
}