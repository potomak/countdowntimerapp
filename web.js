/////////////
// EXPRESS //
/////////////

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


//////////////
// POSTGRES //
//////////////

// var pg = require('pg');
// 
// pg.connect(process.env.DATABASE_URL, function(err, client) {
//   var query = client.query('SELECT * FROM your_table');
// 
//   query.on('row', function(row) {
//     console.log(JSON.stringify(row));
//   });
// });


///////////
// REDIS //
///////////

// var redis = require('redis-url').connect(process.env.REDISTOGO_URL);
// 
// redis.set('foo', 'bar');
// 
// redis.get('foo', function(err, value) {
//   console.log('foo is: ' + value);
// });