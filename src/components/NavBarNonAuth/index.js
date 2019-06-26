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
import logo from 'images/favicon.png';

export default function NavBarNonAuth() {
    return (
        <div>
            <AppBar variant='persistent' className='AppBar' style={{ background: '#000000' }}>
                <Toolbar>
                    <Typography variant='h4' color='inherit' style={{marginLeft: '10px', flex: 1}}>
                        <Link to={ROUTES.LANDING} style={{color: '#FFFFFF', textDecoration: 'none'}}><img src={logo} width="55" height="45"/></Link>
                    </Typography>
                    <Button color='inherit'>
                        <Link to={ROUTES.ABOUT} style={{color: '#FFFFFF', textDecoration: 'none'}}>About</Link>
                    </Button>
                    <Button color='inherit'>
                        <Link to={ROUTES.SIGN_UP} style={{color: '#FFFFFF', textDecoration: 'none'}}>Sign Up</Link>
                    </Button>
                    <Button style={{backgroundColor: '#FFFFFF'}}>
                        <Link to={ROUTES.LANDING} style={{color: '#000000', textDecoration: 'none'}}>Sign In</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}