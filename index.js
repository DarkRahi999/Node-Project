const http = require('http');
const port = 8080;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('My first server');
});

server.listen(port, hostName, () => {
    console.log(`Server running successfully at http://${hostName}:${port}/`);
});