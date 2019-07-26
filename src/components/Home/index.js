import React from 'react';
import { compose } from 'recompose';
import { AuthUserContext, withAuthorization, withEmailVerification } from '../Session';
import ProfileCard from 'components/ProfileCard';
import { Grid } from '@material-ui/core'
import { withFirebase } from '../Firebase';
import image from 'assets/img/bg.jpg'
import Amplify from 'aws-amplify';
import AWS from 'aws-sdk'
import awsconfig from '../../aws-exports';

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
      isLoggedIn: condition
    }
  }

  componentDidMount() {
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
      }, (err, data) => {
        if (err) {
          console.log(err)
        }
        else {
          const lambdaData = JSON.parse(data['Payload'])['potentialMatches']
          if (lambdaData != null) {
            for (var d of lambdaData) {
              this.props.firebase.user(d.id).on('value', snapshot => {
                const users = this.state.users;
                const data = snapshot.val()
                if (data != null) {
                  data['uid'] = d.id;
                  users.push(data);
                  this.setState({ users: users });
                }
              })
            }
          }
        }
      })
    }
  }

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state
    console.log(this.state);
    return (
      <div style={{
        paddingTop: '50px',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        height: '100vh',
        backgroundImage: "url(" + image + ")",
        backgroundSize: 'cover',
        backgroundRepeat: 'round'
      }}>
        <br />
        <h1>Meet these people!</h1>
        <Grid style={{ marginTop: "-40px", marginLeft: '2px', marginRight: '4px', justifyContent: 'center', alignContent: 'center' }} container spacing={3}>
          {this.state.users.map(function (userInfo, index) {
            // console.log(userInfo)
            return <Grid style={{ margin: '2px', }} container item xs={3} spacing={3}>
              <ProfileCard user={userInfo} uid={userInfo.uid} />
            </Grid>
          })}
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
