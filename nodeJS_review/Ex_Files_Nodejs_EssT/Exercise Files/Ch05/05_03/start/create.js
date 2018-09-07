const fs = require('fs');

const addedText = `
This is a test
==============

This is just for beauty
~~~~~~~~~~~~~~~~~~~~~~~

Bullet Points! 
°
°
°
`;

fs.writeFile('sample.md', addedText.trim(), (err, data) => {
  if (err) console.log(err);
  console.log('File Created!');
})