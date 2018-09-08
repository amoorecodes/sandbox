const http = require('http');

const data = require('./data/inventory.json');

const showInStock = (res) => {
  const inStock = data.filter((item) => item.avail === 'In stock');
  res.end(JSON.stringify(inStock));
};

const showOnBackOrder = (res) => {
  const onBackOrder = data.filter((item) => item.avail === 'On back order');
  res.end(JSON.stringify(onBackOrder))
}

http.createServer((req, res) => {

  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(JSON.stringify(data));
  } else if (req.url === '/inStock') {
    showInStock(res);
  } else if (req.url === '/onBackOrder') {
    showOnBackOrder(res);
  } else {
    res.writeHead(404, {'Content-Type:':'text/plain'});
    res.end('404 File Not Found');
  }
}).listen(3535);

console.log('Tired of this');