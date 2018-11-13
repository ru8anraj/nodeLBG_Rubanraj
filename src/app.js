const express = require('express')
    , app = express();

//routes
const sendFile = require('./routes/sendFile.route.js')
    , product = require('./routes/product.route.js')
    , uploadFile = require('./routes/uploadFile.route.js')
    , stringLogic = require('./routes/stringLogic.route.js');

// setting up the required headers for any HTTP request-response
app.use((req, res, next) => {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});

// setting up the express json parser to handle post request
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// setting up routes
app.use('/',(req,res,next)=>{
  console.log('inside routes');
  next();
}, sendFile, product, uploadFile, stringLogic);

module.exports = app;
