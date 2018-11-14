const chai = require('chai')
    , chaiHttp = require('chai-http')
    , server = require('./../../src/server.js').server
    , expect = chai.expect
    , should = chai.should()
    , fs = require('fs');

chai.use(chaiHttp);

describe('/POST uploadFile', function() {
  it('should accept the attached file', function(done) {
    chai.request(server)
      .post('/uploadFile')
      .attach('file', fs.readFileSync(__dirname+'/../../src/files/test.jpg'))
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
