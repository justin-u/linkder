import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from 'components/Session';
import { UserList, UserItem } from 'components/Users';
import * as ROLES from 'constants/roles';
import * as ROUTES from 'constants/routes';
import { withFirebase } from '../Firebase';
import { Button, Table, TableRow, TableHead, TableCell } from '@material-ui/core';


class AdminPage extends React.Component {
  constructor(props) {
    super(props)
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    this.state = {
      reports: [],
      authUser: authUser,
      open: false,
      user: {}
    };
  }

  componentDidMount() {

    this.props.firebase.report().on('value', snapshot => {
      const reportsObject = snapshot.val();
      if (reportsObject != null) {
        const reportsList = Object.keys(reportsObject).map(key => ({
          ...reportsObject[key],
          reportID: key,
        }));
        this.setState({ reports: reportsList });
      }
    })

  }

  async getUserFromID(uid) {

    this.props.firebase.user(uid).on('value', user => {
      user = user.val();
      this.setState(user);
    })
  }

  render() {
    console.log(this.state.reports[0]);
    if (this.state.authUser.ADMIN == "ADMIN") {
      const scope = this;
      return (
        <div>
          <br /><br /><br /><br />
          <h1>Admin</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Complaint</TableCell>
                <TableCell>Submitted By</TableCell>
                <TableCell>Reported User</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              {this.state.reports.map((report, index) => {

                const resolveButton = () => {
                  this.props.firebase.report().child(report.reportID).remove();
                  var r = this.state.reports;
                  var i = r.indexOf(report.reportID);
                  r.splice(i, 1);
                  this.setState({report: r})
                }

                const deleteUser = (uid, reportID) => {
                  this.props.firebase.user(uid).remove();
                  this.props.firebase.report().child(reportID).remove();
                  var r = this.state.reports;
                  var i = r.indexOf(reportID);
                  r.splice(i, 1);
                  this.setState({report: r})
                }

                return <TableRow>
                  <TableCell>{report.reportID}</TableCell>
                  <TableCell>{report.complaint}</TableCell>
                  <TableCell>{report.fromUser}</TableCell>
                  <TableCell>{report.reportedUser}</TableCell>
                  <TableCell><Button color='primary' variant='outlined' onClick={resolveButton.bind(this)}>Resolve</Button></TableCell>
                  <TableCell><Button color='secondary' variant='outlined' onClick={e => deleteUser(report.reportedUser, report.reportID)}>Delete User</Button></TableCell>
                </TableRow>
              })}
            </TableHead>
          </Table>
        </div >
      )
    }
    else {
      return (
        <div>
          <br /><br /><br /><br />
          <h1>YOU DO NOT HAVE ENOUGH RIGHTS</h1>
        </div >
      )
    }
  }
}

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withEmailVerification,
  withFirebase,
)(AdminPage);
