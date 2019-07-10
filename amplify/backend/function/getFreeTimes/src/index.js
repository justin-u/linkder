const fetch = require('node-fetch');

exports.handler = function (event, context) { //eslint-disable-line

	if(!event.hasOwnProperty('id')){

		throw new Error('Missing value for id');
	}

	stub = { 'freeTimes':
				[
					{ 
						'id': 'f677d95f-c42e-4f35-9abf-67f171a5230g',
						'timestamp': '1562797800'
					},
					{ 
						'id': 'f677d95f-c42e-4f35-9abf-67f171a52b53',
						'timestamp': '1562799600'
					},
					{ 
						'id': 'f677d95f-c42e-4f35-9abf-67f171a52d42',
						'timestamp': '1562803200'
					}
				]
			};

	context.done(null, stub);
};