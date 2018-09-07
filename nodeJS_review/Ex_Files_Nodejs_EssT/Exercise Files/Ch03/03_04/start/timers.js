let waitTime = 3000;
let currentTime = 0;
let waitInterval = 50;
let processWaited = 0;

const percentify = function (number) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${number}%`);
};

const interval = setInterval(() => {
  currentTime += waitInterval;
  processWaited = Math.floor(currentTime/waitTime * 100);
  percentify(processWaited);
}, waitInterval);


setTimeout(() => {
  clearInterval(interval);
  percentify(100);
  console.log('\ndone');  

}, waitTime);

process.stdout.write('\n\n');
percentify(processWaited);