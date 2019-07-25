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

class ConversationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: [],
      conversations: []
    };
  }

  componentDidMount() {
    this.getMatches().then(this.getConversations());

    // console.log(this.props);
  }

  // getListUser = async () => {
  //   const result = await myFirestore.collection(AppString.NODE_USERS).get()
  //   if (result.docs.length > 0) {
  //     this.listuser = [...result.docs]
  //     this.setState({ isLoading: false })
  //   }
  // }

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
      }, function (err, data) {
        if (err) {
          console.log(err)
        }
        else {
          let matches = JSON.parse(data['Payload'])
          scope.setState({ matches: matches['currentMatches'] });
        }
      })
    })
  }

  getConversations = () => {
    return new Promise((resolve, reject) => {
      for (var match of this.state.matches) {
        const userID = match.id;
        this.props.firebase.user(userID).on('value', snapshot => {
          const user = snapshot.val();
          // const bio = user.bio
          // const experience = user.experience
          // const lengthOfExp = user.lengthOfExperience
          // const chips = user.chips;
          const imageURL = user.imageURL;
          const condition = user != null
          var conversations = this.state.conversations;
  
          conversations.push(
            {
              photo: imageURL,
              name: user.name,
              text: 'Hello! I am a student at Purdue Univeristy. Would you like to meet me? (This is a long message that needs to be truncated.)'
            }
          )
  
          this.setState({ conversations: conversations });
        })
      }
    })
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

export default compose(withFirebase)(ConversationList);