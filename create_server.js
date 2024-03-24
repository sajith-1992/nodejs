var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    if(req.url==="/")
    {fs.readFile('sample.html', 'utf8', function(err, html) {
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
    })}
    else if(req.url==="/admin"){
        res.write("this is admin")
        res.end()

    }else if(req.url==="/user"){
        res.write("this is user page ")
        res.end()

    }
    ;
}).listen(3000, function() {
    console.log('Server is running on port 3000');
});