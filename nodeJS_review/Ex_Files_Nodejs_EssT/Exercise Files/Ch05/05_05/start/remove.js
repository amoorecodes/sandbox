const fs = require('fs');

// fs.remove('./notes.ms', (err) => console.log('we have removed a file'));

fs.unlinkSync('./lib/config.json', () => console.log('we have removed a file'));

fs.unlink('./notes.md', (err) => {
  if (err) console.log(err);
  console.log('we deleted notes');
});