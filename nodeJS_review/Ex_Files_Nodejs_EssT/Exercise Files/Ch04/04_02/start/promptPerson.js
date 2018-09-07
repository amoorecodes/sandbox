const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

const realPerson = {
  name: '',
  phrases: []
};

rl.question('What is your name?', (answer) => {
  realPerson.name = answer
  rl.setPrompt(`What would ${realPerson.name} say?\n`);
  rl.prompt();

  rl.on('line', (phrase) => {

    realPerson.phrases.push(phrase.trim());
    if (phrase.toLowerCase().trim() === 'exit') {
      // process.exit();
      rl.close();
    } else {
      rl.setPrompt(`What else would ${realPerson.name} say?\n('exit' to leave)\n`)
      // console.log(phrase.trim());
      rl.prompt();
    }
  });


});

rl.on('close', () => {
  console.log('%s is a real person that says %j .', realPerson.name, realPerson.phrases);
  process.exit();
});

