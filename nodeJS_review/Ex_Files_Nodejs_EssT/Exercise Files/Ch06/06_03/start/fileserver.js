const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req,res) => {
  console.log(`Method: ${req.method}.\nUrl: ${req.url}.\n\n`);
  if(req.url === '/') {
    //server index.html
    fs.readFile('./public/index.html', 'utf-8', (err, data) => {
      if (err) console.log('error', err)
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    })
  } else if (req.url.match(/.css$/) || req.url.match(/.jpg$/)) {
    const dot = req.url.indexOf('.');
    const extension = req.url.slice(dot + 1);
    const filePath = path.join(__dirname, 'public', req.url);
    const stream = fs.createReadStream(filePath);
    const contentType = () => {
      if (extension === 'css') {
        return 'text/css';
      } else if (extension === 'jpg') {
        return 'image/jpeg'
      }
    };
    res.writeHead(200, {'Content-Type': `${contentType()}`});
    stream.pipe(res);
  } else {
    //serve 404 message
    res.writeHead(404, {
      'Content-Type': 'plain/text'
    });
    res.end('404 File Not Found');
  }


}).listen(3535);