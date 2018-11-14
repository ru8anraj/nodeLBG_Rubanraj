const chai = require('chai')
    , chaiHttp = require('chai-http')
    , server = require('./../../src/server.js').server
    , expect = chai.expect
    , should = chai.should();

chai.use(chaiHttp);

describe('/GET sendFile', function() {
  it('should receive a file', function(done) {
    chai.request(server)
      .get('/sendFile')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
