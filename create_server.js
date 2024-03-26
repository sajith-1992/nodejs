var http = require('http');
var fs = require('fs');
var url=require("url")


http.createServer(function (req, res) {
    var q =url.parse(req.url,true)
    console.log(q.pathname)
    if(q.pathname==="/")
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
    else if(q.pathname==="/admin"){
        res.write("this is admin")
        res.end()

    }else if(q.pathname==="/user"){
        res.write("this is user page ")
        res.end()


    }
    else if(q.pathname==="/signup")
    {fs.readFile('signup.html', 'utf8', function(err, html) {
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
    })

    } else if(q.pathname==="/signupaction"){ 
        
        console.log(q.query)
        
        res.write("<h1>"+q.query.email+"</h1>")
        /* fs.readFile('signupform.html',(err,data)=>{
            if (err) {
                // Handle error
                console.error('Error reading HTML file:', err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(<h1>+q.query.email+</h1>); //write the HTML content to the response
                res.end(); //end the response
            }
        }) */
        
    } 
    else{
        console.error('Error reading HTML file:', err);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
    }


    
        

  

}).listen(3000, function() {
    console.log('Server is running on port 3000');
});