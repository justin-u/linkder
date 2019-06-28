import React from 'react';

import { withFirebase } from '../Firebase';
import Button from '@material-ui/core/Button';
import * as ROUTES from 'constants/routes'
import { Link } from 'react-router-dom';

const SignOutButton = ({ firebase }) => (
  <Button onClick={firebase.doSignOut} style={{
    backgroundColor: '#FFFFFF'
  }}>
    <Link to={ROUTES.LANDING} style={{ color: '#000000', textDecoration: 'none' }}>Sign out</Link>
  </Button>
);

export default withFirebase(SignOutButton);
