import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import LandingPage from 'components/Landing';
import SignUpPage from 'components/SignUp';
import PasswordForgetPage from 'components/PasswordForget';
import HomePage from 'components/Home';
import AccountPage from 'components/Account';
import AdminPage from 'components/Admin';
import AboutPage from 'components/About';

import * as ROUTES from 'constants/routes';
import NavBarNonAuth from 'components/NavBarNonAuth';


const App = () => (
    <Router>
        <div>
            <NavBarNonAuth />
            <hr />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
            <Route path={ROUTES.ABOUT} component={AboutPage} />

        </div>
    </Router>
);

export default App;