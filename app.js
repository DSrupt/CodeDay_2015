var http = require('http');

var app = http.createServer(function(request,response){
    response.writeHead(200,
    {
      "Content-Type":"text/plain"
    }
  );
  response.end("Hello World! ");

})

app.listen(1337,"localhost");
