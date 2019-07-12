import React from 'react';
import Scheduler from 'devextreme-react/scheduler';
import { CheckBox } from 'devextreme-react/check-box';
import notify from 'devextreme/ui/notify';
import Lambda from 'aws-sdk/clients/lambda'
import AWS from 'aws-sdk'
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import { AuthUserContext, withAuthorization, withEmailVerification } from '../Session';

import { data } from './data.js';

const currentDate = new Date(2017, 4, 22);
const views = ['day', 'week', 'month'];
const authUser = JSON.parse(localStorage.getItem('authUser'));
const condition = authUser != null

class ProfileCalendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allowAdding: true,
      allowDeleting: true,
      allowResizing: true,
      allowDragging: true,
      allowUpdating: true,
      data: [],
      isLoggedin: condition,
      authUser: authUser
    };
    this.onAllowAddingChanged = this.onAllowAddingChanged.bind(this);
    this.onAllowDeletingChanged = this.onAllowDeletingChanged.bind(this);
    this.onAllowResizingChanged = this.onAllowResizingChanged.bind(this);
    this.onAllowDraggingChanged = this.onAllowDraggingChanged.bind(this);
    this.onAllowUpdatingChanged = this.onAllowUpdatingChanged.bind(this);
    this.showAddedToast = this.showAddedToast.bind(this);
    this.showUpdatedToast = this.showUpdatedToast.bind(this);
    this.showDeletedToast = this.showDeletedToast.bind(this);
  }

  componentWillMount() {
    console.log(data())
    data().then((events) => {
      console.log(events)
      this.setState({ data: events });
    }).catch(e => console.log(e));
  }

  render() {
    return (
      <React.Fragment>
        <Scheduler
          dataSource={this.state.data}
          views={views}
          defaultCurrentView={'week'}
          defaultCurrentDate={currentDate}
          startDayHour={8}
          endDayHour={24}
          height={600}
          editing={this.state}
          onAppointmentAdded={this.showAddedToast}
          onAppointmentUpdated={this.showUpdatedToast}
          onAppointmentDeleted={this.showDeletedToast}
        />
      </React.Fragment>
    );
  }

  onAllowAddingChanged(e) {
    // console.log(e)
    this.setState({ allowAdding: e.value });
  }

  onAllowDeletingChanged(e) {
    // console.log(e)

    this.setState({ allowDeleting: e.value });
  }

  onAllowResizingChanged(e) {
    // console.log(e)

    this.setState({ allowResizing: e.value });
  }

  onAllowDraggingChanged(e) {
    this.setState({ allowDragging: e.value });
  }

  onAllowUpdatingChanged(e) {
    this.setState({ allowUpdating: e.value });
  }

  showToast(event, value, type) {
    notify(`${event} "${value}" task`, type, 800);
  }

  showAddedToast(e) {

    if (this.state.isLoggedin) {
      const payload = {
        'id': this.state.authUser.uid,
        'time': e.appointmentData.startDate,
      }
      // console.log(payload)
      const lambda = new AWS.Lambda()
      lambda.invoke({
        FunctionName: 'addFreeTime-dev',
        Payload: JSON.stringify(payload)
      }, function (err, data) {
        if (err) {
          console.log(err)
        }
        else {
          // console.log(JSON.parse(data['Payload']))
          e['id'] = JSON.parse(data['Payload'])['id']
        }
      })
    }
    // console.log(e)
    this.showToast('Added', e.appointmentData.text, 'success');
  }

  showUpdatedToast(e) {
    this.showToast('Updated', e.appointmentData.text, 'info');
  }

  showDeletedToast(e) {
    this.showToast('Deleted', e.appointmentData.text, 'warning');
  }
}

export default compose(
  withFirebase,
  withEmailVerification)(ProfileCalendar);