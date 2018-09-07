const fs = require('fs');

// fs.readFile('./chat.log', 'UTF-8', (err, data) => {
//   if (err) console.log('error in readstream');
//   console.log('File was read, it has ' + data.length + ' characters.');
// });

const chatStream = fs.createReadStream('chat.log', 'utf-8');

let data = '';

chatStream.once('data',  () => console.log('Reading chat log'));
chatStream.on('data', (chunk) => data+=chunk);
chatStream.on('end', () => console.log('We are done reading file. It has : ' + data.length + ' characters'));


// fs.createReadStream('./chat.log', 'UTF-8', (err, data) => {
//   if (err) console.log('error in readstream');
//   console.log('File was read, it has ' + data.length + ' characters.');
// });