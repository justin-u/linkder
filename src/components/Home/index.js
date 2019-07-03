import React from 'react';
import { compose } from 'recompose';
import { AuthUserContext, withAuthorization, withEmailVerification } from '../Session';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';

Amplify.configure(awsconfig);

console.log("working!");


class HomePage extends React.Component {

  state = {}
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {

  }

  render() {
    
    return (
      <div style={{
        paddingTop: '50px'
      }}>
        <h1>Home</h1>
      </div>
      
    );
  }
}


const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
