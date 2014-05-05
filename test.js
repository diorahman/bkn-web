var request = require('supertest').agent;
var server = require('./');

describe('bkn', function(){
  it ('should get profile', function(done){
    request(server.listen())
    .get('/196805071987121001')
    .expect(200)
    .end(function(err, res){
      if (err) return done(err);
      res.body.Nama.should.equal('LAKSANA TRI HANDOKO');
      done();
    });
  })

  it ('should get nothing', function(done){
    request(server.listen())
    .get('/196805071987121005')
    .expect(404)
    .end(function(err, res){
      if (err) return done(err);
      done();
    });
  })
});