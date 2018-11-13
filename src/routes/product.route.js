const product = require('./router.config.js');

product.get('/product/:x/:y', (req, res) => {
  let prod = parseInt(req.params.x) * parseInt(req.params.y);
  res.send(prod.toString());
});

module.exports = product;
