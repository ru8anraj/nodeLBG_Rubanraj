const chai = require('chai')
    , chaiHttp = require('chai-http')
    , server = require('./../../src/server.js').server
    , expect = chai.expect
    , should = chai.should();

chai.use(chaiHttp);

describe('/GET product/:x/:y', function() {
  it('should receive the products of two arguments', function(done) {
    chai.request(server)
      .get('/product/2/3') // 2 * 3 = 6
      .end((err, res) => {
        expect(res).to.have.status(200);
        res.text.should.equal('6');
        done();
      });
  });
});
