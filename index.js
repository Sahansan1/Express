const http = require('http');

const hostname = '127.0.0.1';
const port = 3010; //changed from 3000 as my other server is running on 3000

//creating small server to handle requests
//=> fat arrow returns something like console.log instead of writting full syntax of a fucntion
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World...'); //will see in browser
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});