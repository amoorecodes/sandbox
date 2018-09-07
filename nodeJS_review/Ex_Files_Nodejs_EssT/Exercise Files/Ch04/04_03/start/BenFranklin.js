// const events = require('events');
// const emitter = new events.EventEmitter();

// emitter.on('customEvent', (message, status) => {
//   console.log(`${status}: ${message}.`);
// });

// emitter.emit('customEvent', 'Hello World', 200);

const EventEmitter = require('events').EventEmitter;
const util = require('util');

const Person = function(name) {
  this.name = name;
  this.phrases = [];
}

util.inherits(Person, EventEmitter);

const ben = new Person('Eddy Taken');
ben.on('speak', (phrase) => {
  ben.phrases.push(phrase.trim());
  console.log(`${ben.name}: ${phrase}`);
});

ben.emit('speak', 'I love spinning');
