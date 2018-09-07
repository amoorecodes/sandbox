const questions = [
  'What\'s your name?',
  'How\'s the mood?',
  'Ready to be done with this?'
];

const answers = [];

const ask = function(i) {
  process.stdout.write(`\n ${questions[i]}`);
  process.stdout.write('\n > \n'); 
}

process.stdin.on('data', (data) => {
  answers.push(data.toString());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', () => process.stdout.write(`\n\n\n Go ${answers[1]} \n\n\n`));

ask(0);
