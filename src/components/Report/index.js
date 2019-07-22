import React, { Component } from 'react';
import { withFirebase } from 'components/Firebase';
import { Button, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import image from 'assets/img/bg7.jpg'

class Report extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const reportedUser = this.props.match.params.user;
    const fromUser = this.props.match.params.userfrom;
    this.state = { 
      complaint: '',
      reportedUser: reportedUser,
      fromUser: fromUser,
      error: null
     };
  }

  onSubmit = event => {
    const { complaint, reportedUser, fromUser } = this.state;

    this.props.firebase.report().push({
      complaint,
      reportedUser,
      fromUser
    })
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { complaint, error } = this.state;
    return (
      <div style={{ minHeight: '100vh' ,height: '100vh', justifyContent: 'center', alignContent: 'center', textAlign: 'center', backgroundImage: "url(" + image + ")", backgroundSize: 'cover'}}>
        <Typography variant ='h3' style={{ color: '#ffffff', paddingTop: '120px'}}>
          Report the User
        </Typography>

        <br/><br/><br/>

        <form onSubmit = {this.onSubmit.bind(this)}>
          <Typography style = {{color: '#ffffff'}} variant = 'body'>
              Enter your reason for reporting below
          </Typography>

          <br/><br/><br/>

          <TextField style = {{bordercolor: 'black', background: "white", backgroundColor: 'white', paddingLeft: '10px', paddingRight: '10px',
            width: '550px'}} 
            name = "complaint"
            value = {complaint}
            onChange={this.onChange.bind(this)}
            type = "string"
            placeholder="Enter Reason Here"
            multiline
            />

          <br/><br/><br/>

          <Button style = {{ backgroundColor: "#000000", color: "#FFFFFF" }} variant="outlined" type = "submit">
            Report
          </Button>

          {error && <p>{error.message}</p>}
        </form>
         <br/>
      </div>
    );
  }
}

export default withFirebase(Report);
