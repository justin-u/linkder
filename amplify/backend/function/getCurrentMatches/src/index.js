const https = require('https');

exports.handler = function (event, context) { //eslint-disable-line

	if(!event.hasOwnProperty('id')){

		throw new Error('Missing value for id');
	}

	let id = event.id;

	const req_body = { 'query': `query { 
		findUser(id: \"${id}\"){ 
			likes{
				items{
					receiver{
						id
						firstName
						lastName
						url
						likes{
							items{
								receiver{
									id
								}
							}
						}
					}
				}
			}
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
            resp_body_parsed = {'currentMatches': []};

            for( var x in resp_body.data.findUser.likes.items ){

            	for( var y in resp_body.data.findUser.likes.items[x].receiver.likes.items){

            		if( resp_body.data.findUser.likes.items[x].receiver.likes.items[y].receiver.id == id ){
            			
            			delete resp_body.data.findUser.likes.items[x].receiver.likes;

            			resp_body_parsed['currentMatches'].push(resp_body.data.findUser.likes.items[x].receiver);
            		}
            	}
            }

            context.done(null,resp_body_parsed);
        });
        
    }).on('error', (e) => {
        
        context.done(e);
    });

    req.write(postData);
    req.end();
};