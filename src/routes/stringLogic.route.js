const stringLogic = require('./router.config.js');

stringLogic.post('/stringNonRepeat', (req, res) => {
  var inp = req.body.input.toLowerCase();
  var input = inp.split('');
  var dup = [];
  var nonRepeat = '';

  // finding count for each element
  input.map((item, i) => {
    var count = 0;
    input.map((str) => {
      if (item == str) {
        count += 1;
      }
    });
    dup[i] = count;
  });

  // finding the nonRepeat element
  for(let j = 0; j < input.length; j++) {
    if (dup[j] == 1) {
      nonRepeat = input[j];
      break;
    }
  }

  res.send(nonRepeat)
});

module.exports = stringLogic;
