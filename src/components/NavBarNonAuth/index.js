import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import logo from 'assets/img/favicon.png';

const NavBarNonAuth = () => {
    return (
        <div>
            <AppBar variant='persistent' className='AppBar' style={{ background: '#000000' }}>
                <Toolbar>
                    <Typography variant='h4' color='inherit' style={{marginLeft: '10px', flex: 1}}>
                        <Link to={ROUTES.LANDING} style={{color: '#FFFFFF', textDecoration: 'none'}}><img src={logo} width="55" height="45"/></Link>
                    </Typography>
                    <Button color='inherit'>
                        <Link to={ROUTES.LANDING} style={{color: '#FFFFFF', textDecoration: 'none'}}>Landing</Link>
                    </Button>
                    <Button color='inherit'>
                        <Link to={ROUTES.SIGN_UP} style={{color: '#FFFFFF', textDecoration: 'none'}}>Sign Up</Link>
                    </Button>
                    <Button style={{backgroundColor: '#FFFFFF'}}>
                        <Link to={ROUTES.SIGN_IN} style={{color: '#000000', textDecoration: 'none'}}>Log in</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBarNonAuth;