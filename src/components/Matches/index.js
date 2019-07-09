import React from 'react';

import * as ROUTES from 'constants/routes';
import * as ROLES from 'constants/roles';


class Matches extends React.Component {
	 state = {};
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleClose = this.handleClose.bind(this);
    }
}


export default Matches;

