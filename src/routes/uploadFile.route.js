const uploadFile = require('./router.config.js')
    , multer = require('multer')
    , fs = require('fs');

var storage = multer.diskStorage({
     destination: function(req, file, callback) {
         callback(null, "./files");
     },
     filename: function(req, file, callback) {
         callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
     }
 });
var upload = multer({ storage: storage });


uploadFile.post('/uploadFile', upload.single('file'), (req, res) => {
  var file = req.file;
  if (file) {
    res.send('file uploaded');
  } else {
    res.send('failed to upload!');
  }
});

module.exports = uploadFile;
