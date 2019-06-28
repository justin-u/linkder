import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from 'components/SignOut';
import * as ROUTES from 'constants/routes';
import * as ROLES from 'constants/roles';
import NavBar from 'components/NavBar';
import Button from '@material-ui/core/Button';
import 'components/Navigation/Navigation.css';
import NavBarNonAuth from 'components/NavBarNonAuth';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <NavBar>
  </NavBar>
);

const NavigationNonAuth = () => (
  <NavBarNonAuth>
  </NavBarNonAuth>
  // <ul>
  //   <li>
  //     <Link to={ROUTES.LANDING}>Landing</Link>
  //   </li>
  //   <li>
  //     <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  //   </li>
  // </ul>
);

export default Navigation;
