var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs');

var realPerson = {
	name: '',
	sayings: []
};


rl.question("What is the name of a real person? ", function(answer) {

  realPerson.name = answer;
  
  fs.writeFileSync(`${realPerson.name}.md`, answer + '\n\n', (err) => console.log('File was created'));


	rl.setPrompt(`What would ${realPerson.name} say? `);

	rl.prompt();

	rl.on('line', function(saying) {

		realPerson.sayings.push(saying.trim());

    fs.appendFile(`${realPerson.name}.md`, saying + '\n', (err) => console.log('appended some stupid quote'));

		if (saying.toLowerCase().trim() === 'exit') {
			rl.close();
		} else {
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
		    rl.prompt();
		}

	});

});


rl.on('close', function() {

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();
	
});



