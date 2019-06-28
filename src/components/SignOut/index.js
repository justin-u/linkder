import React from 'react';

import { withFirebase } from '../Firebase';
import Button from '@material-ui/core/Button';

const SignOutButton = ({ firebase }) => (
  <Button onClick={firebase.doSignOut} style={{
    backgroundColor: '#FFFFFF'
  }}>
    Sign out
  </Button>
);

export default withFirebase(SignOutButton);
