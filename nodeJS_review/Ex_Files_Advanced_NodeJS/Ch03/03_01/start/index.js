const { createServer } = require('http');
const { stat, createReadStream } = require('fs');
const { promisify } = require('util');
const video = './../../powder-day.mp4';
const videoInfo = promisify(stat);

createServer(async (req,res) => {

  const { size } = await videoInfo(video);

  res.writeHead(200, {
    'Content-Length' : size,
    'Content-Type' : 'video/mp4'
  });
  createReadStream(video).pipe(res);

})
  .listen(3000, () => console.log('server is running'));