const http = require('http');

const server = http.createServer((req,res) => {
  res.writeHead(200,{
    "Content-Type": "text/html"
  });

  res.end(
    `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>0602</title>
</head>
<body>
  <p>Test of the server running on port ${res.statusCode}</p>
  <p>${req.url}</p>
  <p>${req.method}</p>
</body>
</html>
    `
  );
});

server.listen(3535);

console.log('Server is running on 3535');
