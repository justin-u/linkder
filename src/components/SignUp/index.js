import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from 'components/Firebase';
import * as ROUTES from 'constants/routes';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import image from 'assets/img/bg.jpg'
import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: 'AKIA6PTGMIK4SFDNUZ2I', secretAccessKey: '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', region: 'us-east-1'
})

const SignUpPage = () => (
  <div style = {{ height: '100vh', paddingTop: '50px', textAlign: 'center', backgroundImage: "url(" + image + ")", backgroundSize: 'cover' }}>
    <Typography variant='h1' style={{ paddingTop: '50px' }}>SignUp</Typography>
    <br/> <br/>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  name: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  imageURL: '',
  error: '',
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';
const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends React.Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = { ...INITIAL_STATE };
  }

  async addUserLambda(authUser) {

    console.log(authUser)
    const payload = {
      'id': authUser.uid,
      'firstName': authUser.name.split(' ')[0] || ' ',
      'lastName': authUser.name.split(' ')[1] || ' ',
      'defaultLatitude': 30.123,
      'defaultLongitude': 40.123,
      'url': authUser.imageURL || 'https://thispersondoesnotexist.com/image'
    }
    console.log(payload)
    const lambda = new AWS.Lambda()
    await lambda.invoke({
      FunctionName: 'addUser-dev',
      Payload: JSON.stringify(payload)
    }, function (err, data) {
      if (err) {
        console.log(err)
      }
      else {
        console.log(JSON.parse(data['Payload']))
      }
    })
  }

  onSubmit = event => {
    var { name, email, passwordOne, passwordTwo, imageURL, error } = this.state;

    const roles = {};

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          name,
          email,
          imageURL
        });
      })
      .then(() => {
        return this.props.firebase.doSendEmailVerification();
      })
      .then(() => {
        const authUser = JSON.parse(localStorage.getItem('authUser'));
        this.addUserLambda(authUser);
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      name,
      email,
      passwordOne,
      passwordTwo,
      imageURL,
      error
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      name === '';

    return (
      <form onSubmit={this.onSubmit} style={{ textAlign: 'center' }}>
        <TextField
          name = "name"
          value = {name}
          onChange = {this.onChange}
          type = "text"
          placeholder = "Full Name"
          style = {{ paddingBottom: '10px' }}
        />
        <br />
        <TextField
          name = "email"
          value = {email}
          onChange = {this.onChange}
          type = "text"
          placeholder = "Email Address"
          style = {{ paddingBottom: '10px' }}
        />
        <br />
        <TextField
          name = "passwordOne"
          value = {passwordOne}
          onChange = {this.onChange}
          type = "password"
          placeholder = "Password"
          style = {{ paddingBottom: '10px' }}
        />
        <br />
        <TextField
          name = "passwordTwo"
          value = {passwordTwo}
          onChange = {this.onChange}
          type = "password"
          placeholder="Confirm Password"
          style = {{ paddingBottom: '10px' }}
        />
        <br />
        <TextField
          name="imageURL"
          value = {imageURL}
          onChange = {this.onChange}
          type = "text"
          placeholder = "Link to Image (Optional)"
          style = {{ paddingBottom: '10px', paddingTop: '20px' }}
        />
        <br /><br />
        <Button disabled = {isInvalid} type="submit" variant='contained' style = {{ color: "#ffffff", backgroundColor: "#000000" }}>
          Sign Up
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
