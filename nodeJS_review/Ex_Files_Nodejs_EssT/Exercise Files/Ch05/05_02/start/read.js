const fs = require('fs');
const path = require('path');

// let text = fs.readFileSync('./lib/sayings.md', 'UTF-8');

fs.readFile('./lib/sayings.md', 'UTF-8', (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

// console.log(text);


// fs.readdir('./lib', (err, files) => {
//   files.forEach(file => {
//     fs.readFile(path.join(__dirname,'lib',file), 'UTF-8', (err,data) => {
//       if (err) console.log(err);
//       console.log(data);
//     });
//   })
// })
fs.readdir('./lib', (err, files) => {
  files.forEach(file => {
    const filePath = path.join(__dirname, 'lib', file);
    const stats = fs.statSync(filePath);
    if (stats.isFile() && file !== '.DS_Store') {
      fs.readFile(filePath, 'UTF-8', (err, data) => {
        if (err) console.log(err);
        console.log(data);
      })
    }
  })
})