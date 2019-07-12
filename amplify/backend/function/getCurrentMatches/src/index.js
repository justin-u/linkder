const https = require('https');

exports.handler = function (event, context) { //eslint-disable-line

	if(!event.hasOwnProperty('id')){

		throw new Error('Missing value for id');
	}

	let id = event.id;

	const req_body = { 	'query': `query {

		findUser(id: \"${id}\" ){
						
						likes{
							items{
								user{
									id
									url
									likes{
										items{
											user{
												id
											}
										}
									}
								}
							}
						}
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
            var resp_body_parsed = {'currentMatches': []};

            for (x in resp_body.data.findUser.likes.items){
            	for (y in resp_body.data.findUser.likes.items[x].user.likes.items){
            		if(resp_body.data.findUser.likes.items[x].user.likes.items[y].user.id == event.id){
            			resp_body_parsed['currentMatches'].push(resp_body.data.findUser.likes.items[x].user);
            			delete resp_body_parsed.currentMatches[x].likes;
            		}
            	}
            }
            
            context.done(null,resp_body_parsed);
           	
        });
        
    }).on('error', (e) => {
        
        context.done(error);
    });

    req.write(postData);
    req.end();
};