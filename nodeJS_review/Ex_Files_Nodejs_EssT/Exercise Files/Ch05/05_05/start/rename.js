const fs = require('fs');

fs.renameSync('./lib/project-config.js', './lib/config.json');

console.log('We have renamed a file');

fs.rename('./lib/notes.md', './notes.md', (err) => {
  if (err) console.log(err);
  console.log('We have moved the file');
});

