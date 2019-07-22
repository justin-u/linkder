import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from 'components/Session';
import { UserList, UserItem } from 'components/Users';
import * as ROLES from 'constants/roles';
import * as ROUTES from 'constants/routes';
import { withFirebase } from '../Firebase';


class AdminPage extends React.Component {
  constructor(props) {
    super(props)
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    this.state = {
      authUser: authUser,
      open: false
    };
  }

  render() {
    if (this.state.authUser.ADMIN == "ADMIN") {
      return (
        <div>
          <br /><br /><br /><br />
          <h1>Admin</h1>
          <p>The Admin Page is accessible by every signed in admin user.</p>
        </div >
      )
    }
    else {
      return (
        <div>
          <br /><br /><br /><br />
          <h1>YOU DO NOT HAVE ENOUGH RIGHTS</h1>
        </div >
      )
    }
  }
}

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withEmailVerification,
  withFirebase,
)(AdminPage);
