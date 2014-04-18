var Guest = require('mongoose').model('Guest');

exports.index = function (req, res) {
  Guest.find(function(err, result){
    res.json(err || result, err ? 500 : 200);
  });
};

exports.create = function(req, res) {
  Guest.create(req.body, function(err, result){
    res.json(err || result, err ? 500 : 200);
  });
};

exports.update = function(req, res) {
  var guest = req.body;  
  delete guest._id;

  Guest.findByIdAndUpdate(req.params.guest, {
    $set: guest
  }, function(err, result) {
    res.json(err || result, err ? 500 : 200);
  });
};

exports.destroy = function(req, res) {
  Guest.remove({
    _id: req.params.guest
  }, function(err, result) {
    res.json(err||result);
  });
};
