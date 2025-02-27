import React from 'react';
import {Typography} from "@material-ui/core";
import ProfileCalendar from 'components/ProfileCalendar'
import Lambda from 'aws-sdk/clients/lambda'
import AWS from 'aws-sdk'

export default class Schedule extends React.Component {

  state = {}
  constructor(props) {
    super(props)
    AWS.config.update({
      accessKeyId: 'AKIA6PTGMIK4SFDNUZ2I', secretAccessKey: '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', region: 'us-east-1'
    })
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    const bio = authUser.bio
    const experience = authUser.experience
    const lengthOfExp = authUser.lengthOfExperience
    // console.log(authUser)

    const condition = authUser != null

    this.state = {
      authUser: authUser,
      bio: bio,
      experience: experience,
      isLoggedIn: condition,
      lengthOfExp: lengthOfExp,
      schedulerData: null
    }

  }

  componentDidMount() {
    var schedulerData = {}

    if (this.state.isLoggedIn) {
      const payload = {
        'id': this.state.authUser.uid
      }
      const lambda = new AWS.Lambda()
      
      const scope = this; 

      lambda.invoke({
        FunctionName: 'getFreeTimes-dev',
        Payload: JSON.stringify(payload)
      }, function(err, data) {
        if (err) {
          alert(err)
        }
        else {
          var d = [JSON.parse(data['Payload'])]
          console.log(d)
          scope.setState({schedulerData: d});
        }
      });
    }

    
  }

  onSubmit = async (event) => {

    this.props.firebase.user(this.state.authUser.uid).update({
      'bio': this.state.bio,
      'experience': this.state.experience,
      'lengthOfExperience': this.state.lengthOfExp
    }).then(() => {
      this.setState(this.state)
    })

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state)
  };

  render() {
    const { classes, ...rest } = this.props;
    
    if (this.state.isLoggedIn) {
      
      return (
        <div style={{
          marginTop: '30px',
          marginBottom: '30px',
          marginLeft: '30px',
          marginRight: '30px',
          paddingBottom: '30px'
        }}>
          {/* <MyCalendar data={schedulerData}/> */}

          <div>
            <br/><br/><br/><br/>
            <Typography variant='h3' align="center">
              Schedule
            </Typography>
              <br></br>
              <br></br>
          </div>

          <ProfileCalendar data={this.state.schedulerData}></ProfileCalendar>
        </div>
      );
    }
    else {
      return (<div style={{
        paddingTop: '50px'
      }}>
        <h1>You need to be signed in to view this</h1>
      </div>)
    }
  }
}







