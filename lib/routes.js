'use strict';

var index = require('./controllers'),
  fs = require('fs');

/**
 * Application routes
 */
module.exports = function(app) {

  fs.readdirSync('./lib/resources').forEach(function (v) {
    console.log(v);
    var name = v.split('.')[0].replace('Resource', 's');
    console.log(name);
    app.resource('api/' + name, require('./resources/' + v));
  });
  

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( index.index);
};