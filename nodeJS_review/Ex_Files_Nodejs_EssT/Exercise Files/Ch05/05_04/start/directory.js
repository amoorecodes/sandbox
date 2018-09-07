const fs = require('fs');

if(fs.existsSync('lib')) {
  console.log('already there!')
} else {
  fs.mkdir('lib', (err) => {
    if (err) console.log('err!');
    console.log('directory created!');
  });
}


