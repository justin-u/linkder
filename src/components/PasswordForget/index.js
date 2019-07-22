import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from 'components/Firebase';
import * as ROUTES from 'constants/routes';
import { TextField, Button } from '@material-ui/core';
import image from 'assets/img/bg.jpg'

const PasswordForgetPage = () => (
  <div style = {{
    paddingTop: '100px',
    textAlign: 'center',
    height: '100vh',
    backgroundImage: "url(" + image + ")",
    backgroundSize: 'cover'
  }}>
    <h1>Forgot Your Password?</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit = {this.onSubmit}>
        <TextField
          name = "email"
          value = {this.state.email}
          onChange = {this.onChange}
          type = "text"
          placeholder = "Email Address"
          style = {{ textAlign: 'center', paddingBottom: '20px' }}
        />

        <br></br>

        <Button disabled = {isInvalid} type = "submit" variant='contained' style = {{ color: "#ffffff", backgroundColor: "#000000" }}>
          Reset My Password
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
