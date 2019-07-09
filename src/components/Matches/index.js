import React from 'react';
import Messenger from 'components/Messenger';

import * as ROUTES from 'constants/routes';
import * as ROLES from 'constants/roles';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

export default class Matches extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         open: false
    //     };
    //     this.handleClose = this.handleClose.bind(this);
    // }
    render() {
	    return (
	      <div className="App">
	        <Messenger />
	      </div>
	    );
  	}
}



