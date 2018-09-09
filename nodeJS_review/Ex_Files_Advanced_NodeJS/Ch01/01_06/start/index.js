var fs = require('fs');
var { promisify } = require('util');
var writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
var unlink = promisify(fs.unlink);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds*1000);
});

async function start() {
  let files = await readdir(__dirname);
  console.log(files);
}

const doStuffSequentially = async() => {
  console.log('starting');
  await delay(1);
  console.log('waiting');
  await delay(2);
  try {
    await writeFile('someFile.txt', 'this is just the test..');
    beep();
  } catch(err) {
    console.log('oops!');
  }
  console.log('some file has been created');
  await delay(3);
  await unlink('someFile.txt');
  beep();
  console.log('some file has been deleted...');
}

start();
doStuffSequentially();