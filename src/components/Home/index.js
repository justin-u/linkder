import React from 'react';
import { compose } from 'recompose';
import { AuthUserContext, withAuthorization, withEmailVerification } from '../Session';
import ProfileCard from 'components/ProfileCard';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { Grid } from '@material-ui/core'
import awsconfig from '../../aws-exports';
import image from 'assets/img/favicon.png'
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { withFirebase } from '../Firebase';
import Lambda from 'aws-sdk/clients/lambda'
import AWS from 'aws-sdk'

Amplify.configure(awsconfig);
AWS.config.update({
  accessKeyId: 'AKIA6PTGMIK4SFDNUZ2I', secretAccessKey: '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', region: 'us-east-1'
})

class HomePage extends React.Component {

  state = {}
  
  constructor(props) {
    super(props);
    const condition = authUser != null
    const authUser = JSON.parse(localStorage.getItem('authUser'));

    this.state = {
      users: [],
      isLoggedIn: condition,
    }
  }

  componentDidMount() {
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      const authUser = JSON.parse(localStorage.getItem('authUser'));
      const condition = authUser != null

      if (condition) {
        const payload = {
          'id': authUser.uid
        }
        const lambda = new AWS.Lambda()
        lambda.invoke({
          FunctionName: 'getPotentialMatches-dev',
          Payload: JSON.stringify(payload)
        }, function(err, data) {
          if (err) {
            console.log(err)
          }
          else {
            console.log(JSON.parse(data['Payload']))
          }
        })
      }

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state

    return (
      <div style={{
        paddingTop: '50px',
        marginLeft: '40px',
        marginRight: '40px',
        marginBottom: '40px',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'
      }}>
        <br/>
        <h1>Meet these people!</h1>
        <Grid container spacing={3}>
          {this.state.users.map(function (userInfo, index) {
            return <Grid container item xs={3} spacing={3}>
              <ProfileCard user={userInfo} />
            </Grid>
          })}
          {/* <Grid container item xs={3} spacing={3}>
            <ProfileCard user={this.state.users[0]} />
          </Grid>
          <Grid container item xs={3} spacing={3}>
            <ProfileCard />
          </Grid>
          <Grid container item xs={3} spacing={3}>
            <ProfileCard />
          </Grid>
          <Grid container item xs={3} spacing={3}>
            <ProfileCard />
          </Grid>
          <Grid container item xs={3} spacing={3}>
            <ProfileCard />
          </Grid> */}
        </Grid>
      </div>

    );
  }
}


const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
