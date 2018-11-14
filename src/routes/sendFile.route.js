const sendFile = require('./router.config.js');

sendFile.get('/sendFile', (req, res) => {
  var options = {
    root: __dirname + '/../files/',     // sending the static image file from src/files directory (file to send is hard coded)
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  res.sendFile('test.jpg', options, (err) => {
    if (err) {
      console.error('error in sending file - > ', err);
    }
  });
});

module.exports = sendFile;
