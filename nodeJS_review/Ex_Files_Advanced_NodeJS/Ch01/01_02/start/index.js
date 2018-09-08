const delay = (seconds) => new Promise((works, brakes) => {
  setTimeout(() => {
    works('promise works');
  }, seconds * 1000);
});

delay(1)
  .then((message) => message)
  .then((input) => console.log(`It works?\n ${input} <-- passed through data`))
  .catch(console.log('there was an error in delay function'));

console.log('end first tick');
