const fs = require('fs');

const readStream = fs.createReadStream('../../02_01/start/powder-day.mp4');

readStream.on('data', (chunk) => {
  console.log('reading little chunkin', chunk.length);
});

readStream.on('end', () => {
  console.log('ended');
});

readStream.on('error', (err) => {
  console.log('there was an error');
  console.error(err);
});

readStream.pause();

process.stdin.on('data', (chunk) => {
  let text = chunk.toString().trim();
  console.log('logging: ', text);
  if(chunk.toString().trim() === 'finish') {
    readStream.resume();
  } 
  readStream.read();
});