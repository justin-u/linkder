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

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

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
        <h1>Home</h1>
        <Grid container spacing={3}>
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
        </Grid>
        <Grid container item xs={3} spacing={3}>
          <ProfileCard />
        </Grid>
      </Grid>
      </div>

    );
  }
}


const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
