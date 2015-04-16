var istanbul = require('istanbul-middleware');
var express  = require('express');
var path     = require('path');
var fs       = require('fs');
var url      = require('url');

var root  = path.join(__dirname, '..', '..', 'fixtures', 'general', 'public');
var index = path.join(root, 'index.html');

function matcher(req) {
  var parsed = url.parse(req.url);
  return /__split__\/lib\//.test(parsed.pathname);
};

exports.start = function(cover) {
  
  var app = express();

  if (cover) {

    istanbul.hookLoader(root, {
      verbose: true
    });

    app.use('/coverage', istanbul.createHandler({
      verbose: true,
      resetOnGet: true
    }));

    app.use(istanbul.createClientHandler(root, {
      matcher: matcher
    }));
  }

  app.use(express.static(root));

  app.use(function(req, res) {
    if (~(req.url.indexOf('.'))) {
      res.statusCode = 404;
      res.end('File not found: ' + req.url);
    } else {
      res.end(fs.readFileSync(index, 'utf-8'));
    }
  });

  app.use(app.router);
  app.listen(8080);

  console.log('Fixture running on http://localhost:8080');
};