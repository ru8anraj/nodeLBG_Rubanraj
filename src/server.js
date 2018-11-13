const http = require('http')
    , app = require('./app.js')
    , server = http.createServer(app)
    , PORT = 3001 || process.env.PORT;

server.listen(PORT, (err)=>{
  if (err) {
    console.error('Error in starting server - > ', err);
  } else {
    console.info('Server started in port ', PORT);
  }
});
