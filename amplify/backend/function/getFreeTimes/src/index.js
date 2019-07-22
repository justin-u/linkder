const https = require('https');

exports.handler = function (event, context) { //eslint-disable-line

	if(!event.hasOwnProperty('id')){

		throw new Error('Missing value for id');
	}

	let id = event.id;

	const req_body = { 	'query': `query {

		findUser(id: \"${id}\" ){
						
						availabilities{
							items{
								time
                longitude
                latitude
							}
						}
					}
				}`};


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
            var resp_body_parsed = {"freeTimes": []};

            for (var x in resp_body.data.findUser.availabilities.items){
              resp_body_parsed['freeTimes'].push(resp_body.data.findUser.availabilities.items[x]);
            }
            
            context.done(null,resp_body_parsed);
        });
        
    }).on('error', (e) => {
        
        context.done(e);
    });

    req.write(postData);
    req.end();
};