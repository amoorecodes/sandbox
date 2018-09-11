var fs = require('fs');
var { promisify } = require('util');
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds*1000);
});

Promise.all([
  unlink('somefile.txt'),
  unlink('somefile2.txt'),
  delay(3),
  unlink('somefile3.txt'),
])
  .then(() => readdir(__dirname))
  .then(console.log);


