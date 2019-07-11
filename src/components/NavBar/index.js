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
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import logo from 'assets/img/favicon.png';

//TODO: Add Drawer Component

class NavBar extends React.Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleClose = this.handleClose.bind(this);
    }

    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <div>
                <AppBar
                    variant='persistent'
                    className='AppBar'
                    style={{
                        background: '#000000',
                        paddingTop: '10px'
                    }}
                >
                    <Toolbar>
                        <Typography variant='h4' color='inherit' style={{marginLeft: '10px', flex: 1}}>
                            <img src={logo} width="55" height="45"/>
                        </Typography>
                        <Button color='inherit' style={{ marginLeft: '30px' }}>
                            <Link to={ROUTES.HOME} style={{ color: '#FFFFFF', textDecoration: 'none' }}>Home</Link>
                        </Button>
                        <Button color='inherit'>
                            <Link to={ROUTES.MATCHES} style={{ color: '#FFFFFF', textDecoration: 'none' }}>Matches</Link>
                        </Button>
                        <Button color='inherit'>
                            <Link to={ROUTES.PROFILE} style={{ color: '#FFFFFF', textDecoration: 'none' }}>Profile</Link>
                        </Button>
                        <Button color='inherit'>
                            <Link to={ROUTES.SCHEDULE} style={{ color: '#FFFFFF', textDecoration: 'none' }}>Schedule</Link>
                        </Button>
                        <Button color='inherit'>
                            <Link to={ROUTES.ACCOUNT} style={{ color: '#FFFFFF', textDecoration: 'none' }}>Settings</Link>
                        </Button>
                        <SignOutButton />
                    </Toolbar>
                </AppBar>

            </div>
        );
    }
}

export default NavBar;