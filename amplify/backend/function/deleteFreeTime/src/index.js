const fetch = require('node-fetch');

exports.handler = function (event, context) { //eslint-disable-line

	if(!event.hasOwnProperty('id')){

		throw new Error('Missing value for id');
	}

	if(!event.hasOwnProperty('timestamp')){

		throw new Error('Missing value for timestamp');
	}

	stub = { 'id': 'f677d95f-c42e-4f35-9abf-67f171a52a85' }

	context.done(null, stub);
};