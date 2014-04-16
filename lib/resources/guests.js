var Guest = require('mongoose').model('Guest');

exports.index = function (req, res) {
  Guest.find(function(err, guests){
    res.json(guests);
  });
};

exports.create = function(req, res){
  Guest.create(req.body, function(err, result){
    res.json(err||result);
  });
};
