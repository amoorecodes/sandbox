const Person = require('./lib/Person');

const ben = new Person("Ben Franklin");
const george = new Person('George');
ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});

george.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});


ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "I'm not Ben.");
