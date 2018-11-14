const webCrawler = require('./router.config.js')
    , SitemapGenerator = require('sitemap-generator');

webCrawler.post('/webCrawler', (req, res) => {
  // create generator
  const generator = SitemapGenerator(req.query.url, {
    stripQuerystring: true,
    filepath: __dirname + '/../sitemap/sitemap'+Date.now()+'.xml'
  });

  // register event listeners
  generator.on('done', (err, res) => {
    console.info('Sitemap created successfully in src/sitemap directory');
    sendResponse();
  });

  // start the crawler
  generator.start();

  function sendResponse() {
    res.send('Sitemap created successfully in src/sitemap directory');
  }
});

module.exports = webCrawler;
