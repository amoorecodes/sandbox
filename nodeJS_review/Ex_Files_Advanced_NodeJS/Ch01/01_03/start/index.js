// var delay = (seconds) => new Promise((resolves, rejects) => {
//   throw new Error('>>> this is done on purpose <<< ');
//     setTimeout(() => {
//         resolves('the long delay has ended')
//     }, time);
// });

var delay = (seconds) => new Promise((resolves, rejects) => {
  seconds > 3
  ?
  rejects(new Error('the wait is too damn long'))
  :
  setTimeout(() => {
        resolves('the long delay has ended')
  }, seconds*1000);
});

delay(4)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log('Hello world: ${number}'))
  .catch((err) => console.log('there\'s an error! : ', err.message));

console.log('end first tick');
