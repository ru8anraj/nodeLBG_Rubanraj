/*
 *
 */
var startServer = require('./../src/server.js').startServer;


describe("is Server starting ?", function() {
 it("starting server", function(done) {
   startServer()
    .then(res => res)
    .then(done())
    .catch(err => done(err));
 });
});
