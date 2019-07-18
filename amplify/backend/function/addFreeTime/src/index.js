const https = require('https');

exports.handler = function (event, context) { //eslint-disable-line

	if(!event.hasOwnProperty('id')){

		throw new Error('Missing value for id');
	}

	if(!event.hasOwnProperty('time')){

		throw new Error('Missing value for firstName');
	}

	if(!event.hasOwnProperty('longitude')){

		throw new Error('Missing value for  lastName');
	}

	if(!event.hasOwnProperty('latitude')){

		throw new Error('Missing value for defaultLatitude');
	}

	let id = event.id;
	let time = event.time;
	let lat = event.latitude;
	let long = event.longitude;

	const req_body = { 'query': `mutation { 
		createAvailability(input: {	id: \"${id}${time}\"
									availabilityUserId: \"${id}\", 
				 					time: \"${time}\",
				 					latitude: ${lat},
				 					longitude: ${long}}){ 
			id 
		}}`};


	var postData = JSON.stringify(req_body);

	let options = {
  		hostname: 'qdgmoskotbfa5df6joalqrypby.appsync-api.us-east-1.amazonaws.com',
  		headers: {
      		'Content-Type': 'application/json',
      		'Content-Length': postData.length,
        	'x-api-key': 'da2-upo6rlmhknam3anhtbuuojx32e'
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
            resp_body = resp_body.data.createAvailability;
            context.done(null,resp_body);
        });
        
    }).on('error', (e) => {
        
        context.done(e);
    });

    req.write(postData);
    req.end();
};