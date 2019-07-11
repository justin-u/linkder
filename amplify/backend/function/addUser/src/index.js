const fetch = require('node-fetch');

exports.handler = function (event, context) { //eslint-disable-line

	if(!event.hasOwnProperty('id')){

		throw new Error('Missing value for id');
	}

	if(!event.hasOwnProperty('firstName')){

		throw new Error('Missing value for firstName');
	}

	if(!event.hasOwnProperty('lastName')){

		throw new Error('Missing value for lastName');
	}

	if(!event.hasOwnProperty('defaultLatitude')){

		throw new Error('Missing value for defaultLatitude');
	}

	if(!event.hasOwnProperty('defaultLongitude')){

		throw new Error('Missing value for defaultLongitude');
	}

	if(!event.hasOwnProperty('url')){

		throw new Error('Missing value for url');
	}

	fname = event.firstName;
	lname = event.lastName;
	dlat = event.defaultLatitude;
	dlong = event.defaultLongitude;

	const body = { 	'query': `mutation { createUser(input: { firstName: \"${fname}\", lastName: \"${lname}\", defaultLongitude: ${dlong}, defaultLatitude: ${dlat} }){id}}`};
 
	fetch('https://4rwvy7zbgbaf3f2jx4ekplgicq.appsync-api.us-east-1.amazonaws.com/graphql', {
    	method: 'post',
    	body: JSON.stringify(body),
        headers: { 
        	'Content-Type': 'application/graphql',
        	'x-api-key': 'da2-ullbpfmc6rd3hnlqmvenzrlz3q'
        }
    })
    .then(res => res.json())
    .then(json => context.done(null, json.data.createUser));
};
