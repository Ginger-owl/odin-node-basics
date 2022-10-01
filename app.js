const http = require("http");
//const url = require("url");
const fs = require("fs");

http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', function (err, data) {
      if (err) throw err;
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(data);
      return res.end();
    });
  } else if(req.url ==='/about'){
    fs.readFile('about.html',function(err,data){
        if (err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
  } else if(req.url === '/contact-me'){
    fs.readFile('contact-me.html',function(err,data){
        if (err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
  } else if (req.url.indexOf('.css') !== -1) { 
    fs.readFile('./styles.css', function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  } else{
    fs.readFile('404.html',function(err,data){
        if (err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
  }
}).listen(8080, () => {
  console.log('Listen on port 8080');
});