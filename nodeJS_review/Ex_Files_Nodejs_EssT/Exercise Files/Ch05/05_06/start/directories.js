const fs = require ('fs');

// fs.rename('./assets/logs', './logs', (err) => console.log('we have moved a folder!'));

// fs.rmdir('assets', (err) => {
//   if (err) console.log('Ooops!', err);
//   console.log('Can delete without a dot!');
// }); 

fs.readdirSync('./logs').forEach((file) => {
  fs.unlinkSync('./logs/' + file);
});

fs.rmdir('logs', (err) => {
  if (err) console.log('Ooops!', err);
  console.log('finally delted.');
});