var http = require('http');
var parseArgs = require('minimist');
var URL = require('url');
var request = require('request');

module.exports = function (arguments) {
  var argv = parseArgs(arguments);

  var method = argv.m || 'POST';
  var body = argv.body || null;
  var url = argv._[0];

  if (!url) {
    console.log('A URL was not supplied.');
    return process.exit();
  }

  if (!(url.indexOf('http://') === 0 || url.indexOf('https://') === 0)) {
    url = 'http://' + url;
  }

  request({
    uri : url,
    method : method,
    body : body
  }, function (error, response, body) {
    if (error) {
      if (error.code === 'ENOTFOUND') {
        return console.log('Could not contact host/destination.');
      }
      return console.log(error);
    }
    return console.log(response.headers.location || 'No redirect found.');
  });
}



