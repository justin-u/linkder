import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from 'components/Navigation';
import LandingPage from 'components/Landing';
import SignUpPage from 'components/SignUp';
import SignInPage from 'components/SignIn';
import PasswordForgetPage from 'components/PasswordForget';
import HomePage from 'components/Home';
import AccountPage from 'components/Account';
import AdminPage from 'components/Admin';
import ProfilePage from 'components/Profile';
import Product from 'components/Product';
import MatchesPage from 'components/Matches';
import SchedulePage from 'components/Schedule';
import ReportPage from 'components/Report';
import ProfileMatch from 'components/ProfilePublicMatch';

import * as ROUTES from 'constants/routes';
import { withAuthentication } from 'components/Session';
import MetaTags from 'react-meta-tags';

const App = () => {
  // const condition = authUser && !!authUser.roles[ROLES.ADMIN];

  return <Router>
    <div>
    <MetaTags>
        <meta name="HandheldFriendly" content="True" />
        <meta name="description=" content="Linkder-The app that lets you meet people in-person" />
        <meta name="keywords" content="linkder, linkdin, tinder, network, interests, conversation" />
        <meta property="og:title" content="Linkder" />
        <meta property="og:url" content="localhost:3000" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/favicon.ico" /> */}
        <meta property="og:description" content="The app that lets you network and meet people in-person/real life." />
    </MetaTags>
      <Navigation />

      {/* <hr /> */}

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PROFILE} component={ProfilePage} />
      <Route path={ROUTES.PRODUCT_PAGE} component={Product} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.MATCHES} component={MatchesPage} />
      <Route path={ROUTES.SCHEDULE} component={SchedulePage} />
      <Route path={"/report/:user/from/:userfrom"} component={ReportPage} />
      <Route path={"/u/:uid"} component={ProfileMatch} />
    </div>
  </Router>

}

export default withAuthentication(App);
