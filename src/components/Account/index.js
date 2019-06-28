import React, { Component } from 'react';
import { compose } from 'recompose';
import Parallax from "components/Parallax/Parallax.jsx";
import Typography from '@material-ui/core/Typography'

import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from 'components/Session';
import { withFirebase } from 'components/Firebase';
import { PasswordForgetForm } from 'components/PasswordForget';
import PasswordChangeForm from 'components/PasswordChange';
import firebase from '@firebase/app';
import { TextField, Button } from '@material-ui/core';
require('firebase/auth');

const SIGN_IN_METHODS = [
  {
    id: 'password',
    provider: null,
  }
];

const authUser = JSON.parse(localStorage.getItem('authUser'));

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div style={{ justifyContent: 'center', alignContent: 'center', textAlign: 'center'}}>
      <Parallax small filter image={require("assets/img/blockchain.jpg")} />
      <div style={{paddingTop: '100px', paddingBottom: '40px', 
      justifyContent: 'center', alignContent: 'center', textAlign: 'center'}}>
        <Typography variant='h3' style={{ paddingBottom: '40px'}}>
          Account: {authUser.email}
        </Typography>
        <br></br>
        <PasswordChangeForm />
        <LoginManagement authUser={authUser} />
      </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

class LoginManagementBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSignInMethods: [],
      error: null,
    };
  }

  componentDidMount() {
    console.log(authUser)
    this.fetchSignInMethods();
  }

  fetchSignInMethods = () => {
    this.props.firebase.auth
      .fetchSignInMethodsForEmail(this.props.authUser.email)
      .then(activeSignInMethods =>
        this.setState({ activeSignInMethods, error: null }),
      )
      .catch(error => this.setState({ error }));
  };

  onSocialLoginLink = provider => {
    this.props.firebase.auth.currentUser
      .linkWithPopup(this.props.firebase[provider])
      .then(this.fetchSignInMethods)
      .catch(error => this.setState({ error }));
  };

  onDefaultLoginLink = password => {
    const credential = this.props.firebase.emailAuthProvider.credential(
      this.props.authUser.email,
      password,
    );

    this.props.firebase.auth.currentUser
      .linkAndRetrieveDataWithCredential(credential)
      .then(this.fetchSignInMethods)
      .catch(error => this.setState({ error }));
  };

  onUnlink = providerId => {
    this.props.firebase.auth.currentUser
      .unlink(providerId)
      .then(this.fetchSignInMethods)
      .catch(error => this.setState({ error }));
  };

  onDeleteAccount = () => {
    // this.props.auth.currentUser.delete
  }

  getUserKeys() {
    // console.log(authUser.uid)
    // firebase.database().ref('users/' + uid).once('value').then(function(snapshot) {
    //   console.log(snapshot.val());
    // })
    return ('');
  }

  render() {
    const { activeSignInMethods, error } = this.state;

    return (
      <div>
        <br></br>
        <h1>{this.getUserKeys()}</h1>
        TODO: More Account Settings
      </div>
    );
  }
}

const SocialLoginToggle = ({
  onlyOneLeft,
  isEnabled,
  signInMethod,
  onLink,
  onUnlink,
}) =>
  isEnabled ? (
    <Button
      onClick={() => onUnlink(signInMethod.id)}
      disabled={onlyOneLeft}
    >
      Deactivate {signInMethod.id}
    </Button>
  ) : (
    <Button
      onClick={() => onLink(signInMethod.provider)}
    >
      Link {signInMethod.id}
    </Button>
  );

class DefaultLoginToggle extends Component {
  constructor(props) {
    super(props);

    this.state = { passwordOne: '', passwordTwo: '' };
  }

  onSubmit = event => {
    event.preventDefault();

    this.props.onLink(this.state.passwordOne);
    this.setState({ passwordOne: '', passwordTwo: '' });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      onlyOneLeft,
      isEnabled,
      signInMethod,
      onUnlink,
    } = this.props;

    const { passwordOne, passwordTwo } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return isEnabled ? (
      <Button
        onClick={() => onUnlink(signInMethod.id)}
        disabled={onlyOneLeft}
      >
        Deactivate {signInMethod.id}
      </Button>
    ) : (
      <form onSubmit={this.onSubmit}>
        <TextField
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
        />
        <TextField
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
        />

        <Button disabled={isInvalid} type="submit">
          Link {signInMethod.id}
        </Button>
      </form>
    );
  }
}

const LoginManagement = withFirebase(LoginManagementBase);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(AccountPage);
