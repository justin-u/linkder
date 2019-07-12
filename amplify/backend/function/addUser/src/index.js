const https = require('https');

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

	let fname = event.firstName;
	let lname = event.lastName;
	let id = event.id;
	let url = event.url;

	const req_body = { 	'query': `mutation { createUser(input: { url: \"${url}\", id: \"${id}\", firstName: \"${fname}\", lastName: \"${lname}\"}){id}}`};


	var postData = JSON.stringify(req_body);

	let options = {
  		hostname: 'kbtsxq6o7rchfcp7azk3otl5ta.appsync-api.us-east-1.amazonaws.com',
  		headers: {
      		'Content-Type': 'application/json',
      		'Content-Length': postData.length,
        	'x-api-key': 'da2-p54z7yfv75f4bkfypkzbwb3nqi'
    	},
  		path: '/graphql',
  		method: 'POST',
  		protocol: 'https:'
	};
 
	let resp_body = '';
        
    const req = https.request(options, (res) => {
            
    	res.setEncoding("utf8");
        
        res.on('data', (data) => {
            
            resp_body += data;
            
        }).on('end', () => {
            resp_body = JSON.parse(resp_body);
            resp_body = resp_body.data.createUser;
            context.done(null,resp_body);
        });
        
    }).on('error', (e) => {
        
        context.done(error);
    });

    req.write(postData);
    req.end();
};