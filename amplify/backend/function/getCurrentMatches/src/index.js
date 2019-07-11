const fetch = require('node-fetch');

exports.handler = function (event, context) { //eslint-disable-line

	if(!event.hasOwnProperty('id')){

		throw new Error('Missing value for id');
	}

	stub = { 'currentMatches':
				[
					{ 
						'id': 'f677d95f-c42e-4f35-9abf-67f171a5230f',
						'url': 'http://www.aussiehomepcrepair.com/wp-content/uploads/2014/05/User-No-Frame.png'
					},
					{ 
						'id': 'f677d95f-c42e-4f35-9abf-67f171a52b53',
						'url': 'http://www.aussiehomepcrepair.com/wp-content/uploads/2014/05/User-No-Frame.png'
					},
					{ 
						'id': 'f677d95f-c42e-4f35-9abf-67f171a52d42',
						'url': 'http://www.aussiehomepcrepair.com/wp-content/uploads/2014/05/User-No-Frame.png'
					},
					{ 
						'id': 'f677d95f-c42e-4f35-9abf-6bd042f02ab4',
						'url': 'http://www.aussiehomepcrepair.com/wp-content/uploads/2014/05/User-No-Frame.png'
					},
					{ 
						'id': 'f677d95f-c42e-4f35-9abf-91c94d32feb3',
						'url': 'http://www.aussiehomepcrepair.com/wp-content/uploads/2014/05/User-No-Frame.png'
					},
					{ 
						'id': 'f677d95f-c42e-4fg35-9abf-6948de8f20ab',
						'url': 'http://www.aussiehomepcrepair.com/wp-content/uploads/2014/05/User-No-Frame.png'
					},
					{ 
						'id': 'f677d95f-c42e-4f35-9abf-98840def6gab',
						'url': 'http://www.aussiehomepcrepair.com/wp-content/uploads/2014/05/User-No-Frame.png'
					},
					{ 
						'id': 'f677d95f-c42e-4f35-9abf-04892fg73eb3',
						'url': 'http://www.aussiehomepcrepair.com/wp-content/uploads/2014/05/User-No-Frame.png'
					}
				]
			};

	context.done(null, stub);
};