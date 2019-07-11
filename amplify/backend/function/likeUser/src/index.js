const fetch = require('node-fetch');

exports.handler = function (event, context) { //eslint-disable-line

	if(!event.hasOwnProperty('id')){

		throw new Error('Missing value for id');
	}

	stub = { 'id': event.id };

	context.done(null, stub);
};