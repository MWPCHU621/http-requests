var request = require('request');
var fs = require('fs');


request('https://sytantris.github.io/http-examples/future.jpg')

  .on('error', function (err) {                                   // Note 2
    throw err;
  })

  .on('response', function(response) {
    console.log("downloading images....");
    console.log(response.statusCode, response.statusMessage, response.headers['content-type'])

  })

  .on('end', function(respose) {
    console.log("download complete");
  })

  .pipe(fs.createWriteStream('./future.jpg'));

