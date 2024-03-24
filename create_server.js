var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('sample.html', 'utf8', function(err, html) {
        if (err) {
            // Handle error
            console.error('Error reading HTML file:', err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(html); //write the HTML content to the response
            res.end(); //end the response
        }
    });
}).listen(3000, function() {
    console.log('Server is running on port 3000');
});