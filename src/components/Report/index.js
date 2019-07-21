import React, { Component } from 'react';

import { withFirebase } from 'components/Firebase';
import { TextField, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

const INITIAL_STATE = {
  complaint: '',
  error: null,
};

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { complaint } = this.state;

  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { complaint, error } = this.state;
    return (
      <div style={{justifyContent: 'center', alignContent: 'center', textAlign: 'center'}}>
        <Typography variant='h3' style={{ paddingTop: '120px'}}>
            Report the User
         </Typography>
         <br/><br/><br/>
      <form onSubmit={this.onSubmit} style={{
      }}>
        <Typography variant='body'>
            Enter your reason for reporting below
         </Typography>
        <br/><br/><br/>
        <textarea style= {{backgroundcolor: 'transparent', bordercolor: 'black',
			width: '550px'}} id="about" rows="8" maxlength="128" spellcheck="true"></textarea>
        <br/><br/><br/>

        <Button style={{backgroundColor: "#000000"}} variant="outlined" type="submit">
        <Link to={ROUTES.REPORT} style={{color: '#ffffff', textDecoration: 'none'}}>Report</Link>
        </Button>

        {error && <p>{error.message}</p>}
      </form>
      <br/>
      
      </div>
    );
  }
}

export default withFirebase(Report);
