var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};

rl.question("What is the name of a real person? ", function(answer) {

  realPerson.name = answer;
  
  const personalStream = fs.createWriteStream(realPerson.name + '.md');

  personalStream.write(`${realPerson.name}\n~~~~~~~~~~\n\n`);

  rl.setPrompt(`What else would ${realPerson.name} say?`);
  rl.prompt();
  rl.on('line', (input) => {
    if(input.toLowerCase().trim() === 'exit') {
      personalStream.close();
      rl.close();
    } else {
      realPerson.sayings.push(input.trim());
      personalStream.write(input.trim() + '\n\n');
      rl.setPrompt(`What else would ${realPerson.name} say?`);
      rl.prompt();
    }
  });
});


rl.on('close', function() {

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();

});
