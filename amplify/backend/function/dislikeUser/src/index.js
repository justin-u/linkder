const https = require('https');

exports.handler = function (event, context) { //eslint-disable-line

	if(!event.hasOwnProperty('userId')){

		throw new Error('Missing value for userId');
	}

	if(!event.hasOwnProperty('otherId')){

		throw new Error('Missing value for otherId');
	}

	let id1 = event.userId;
	let id2 = event.otherId;

	const req_body = { 	'query': `mutation {

		createDislike(input: { 	
								userDislikesId: \"${id1}\", 
								dislikeUserId: \"${id2}\", 
							}
					){
						
						id
					}
				}`};


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
            resp_body = resp_body.data.createDislike;
            context.done(null,resp_body);
        });
        
    }).on('error', (e) => {
        
        context.done(error);
    });

    req.write(postData);
    req.end();
};