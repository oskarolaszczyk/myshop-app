// // const http = require('http');
// const express = require('express')
// // const hostname = '127.0.0.1';
// // const port = 3000;

// const app = express();

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//       res.send('hello world')
//     })

// app.listen(3000, function() {
//   console.log(`Server running!`);
// });

const app = require('./app');

app.set('port', 3000);

const server = app.listen(app.get('port'), () => {
    console.log(`Product service is listening on 
    ${server.address().port}`);
});