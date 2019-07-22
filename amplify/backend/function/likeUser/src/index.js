const https = require('https');

exports.handler = function (event, context) { //eslint-disable-line

  if(!event.hasOwnProperty('userId')){

    throw new Error('Missing value for userId');
  }

  if(!event.hasOwnProperty('otherId')){

    throw new Error('Missing value for otherId');
  }

  let id = event.userId;
  let oid = event.otherId;

  const req_body = { 'query': `mutation { 
    createLike(input: { id: \"${id}${oid}\", 
              likeSenderId: \"${id}\", 
              likeReceiverId: \"${oid}\"}){ 
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
            resp_body = resp_body;
            context.done(null,resp_body);
        });
        
    }).on('error', (e) => {
        
        context.done(e);
    });

    req.write(postData);
    req.end();
};