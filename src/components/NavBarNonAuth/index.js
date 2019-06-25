import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import * as ROUTES from 'constants/routes';
import * as ROLES from 'constants/roles';
import SignOutButton from 'components/SignOut';

const NavBarNonAuth = () => {
    return (
        <div>
            <AppBar variant='persistent' className='AppBar' style={{ background: '#000000' }}>
                <Toolbar>
                    <Typography variant='h4' color='inherit' style={{marginLeft: '10px', flex: 1}}>
                        <Link to={ROUTES.LANDING} style={{color: '#FFFFFF', textDecoration: 'none'}}>Linkder</Link>
                    </Typography>
                    <Button color='inherit'>
                        <Link to={ROUTES.ABOUT} style={{color: '#FFFFFF', textDecoration: 'none'}}>About</Link>
                    </Button>
                    <Button color='inherit'>
                        <Link to={ROUTES.SIGN_UP} style={{color: '#FFFFFF', textDecoration: 'none'}}>Sign Up</Link>
                    </Button>
                    <Button style={{backgroundColor: '#FFFFFF'}}>
                        <Link to={ROUTES.SIGN_IN} style={{color: '#000000', textDecoration: 'none'}}>Log In</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBarNonAuth;