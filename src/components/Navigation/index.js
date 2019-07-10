import React from 'react';

import { AuthUserContext } from '../Session';
import NavBar from 'components/NavBar';
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
);

export default Navigation;
