const fs = require('fs');

const handleRoute = (filePath, statusCode, req, res) =>{
    fs.readFile( filePath, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(statusCode, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
}

module.exports = handleRoute;