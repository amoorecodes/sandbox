const fs = require('fs');

// const directory = fs.readdirSync('./lib'); bad, clogs the thread

fs.readdir('./lib', (err, files) => {
  if (err) console.log('there was an error in readdir', err)
  console.log(files);
})

console.log('Reading files...\n');