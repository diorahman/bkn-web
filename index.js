var express = require ('express');
var profileOf = require('bkn-cheerio');
var server = express();
server.get('/:nip', function(req, res){
  profileOf(req.params.nip, function(err, profile){
    if (err) return res.send(500, { error: 'serpernye bkn mati kayaknya' });
    if (Object.keys(profile).length == 0) return res.send(404, 'eh, sapa tuh?');
    res.send(profile);  
  });
});

module.exports = server;
