const chai = require('chai')
    , chaiHttp = require('chai-http')
    , server = require('./../../src/server.js').server
    , expect = chai.expect
    , should = chai.should();
chai.use(chaiHttp);

describe('/POST stringNonRepeat', function() {
  it('should receive a non repeating string', function(done) {
    chai.request(server)
      .post('/stringNonRepeat')
      .send({ input: "R Rubanraj" }) // should return 'u' as the output
      .end((err, res) => {
        expect(res).to.have.status(200);
        res.text.should.equal('u');
        done();
      });
  });
});
