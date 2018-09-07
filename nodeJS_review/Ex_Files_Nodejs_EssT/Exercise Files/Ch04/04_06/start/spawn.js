const spawn = require('child_process').spawn;

const command = spawn('node', ['alwaysTalking']);

command.stdout.on('data', (data) => console.log(`STDOUT: ${data.toString()}`));

command.on('close', () => {
  console.log('Child Process has ended');
  process.exit();
});

setTimeout(() => command.stdin.write('stop'), 4000);