const http = require('http')
    , app = require('./app.js')
    , server = http.createServer(app)
    , PORT = 3001 || process.env.PORT;     // PORT specified

// promises to start the server in desired port
function startServer() {
  return new Promise((resolve, reject) => {
    server.listen(PORT, (err)=>{
      if (err) {
        reject('Error in starting server - > '+ err);
      } else {
        resolve('Server started in port '+ PORT);
      }
    });

  });
}

// exporting the server
if (require.main === module) {
    startServer()
    .then(res => console.log(res))
    .catch(err => console.error(err));
} else {
    exports.startServer = startServer;
    exports.server = server;
}
