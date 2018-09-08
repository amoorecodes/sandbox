const { promisify } = require('util');


var delay = (seconds, callback) => {
    if (seconds > 3) {
        callback(new Error(`${seconds} seconds it too long!`));
    } else {
        setTimeout(() =>
            callback(null, `the ${seconds} second delay is over.`),
            seconds
        );
    }
}

const promiseDelay = promisify(delay);

promiseDelay(5)
  .then(console.log)
  .catch((err) => console.log('promisification didn\'t work: ', err.message));

// delay(2, (error, message) => {
//     if (error) {
//         console.log(error.message);
//     } else {
//         console.log(message);
//     }
// });
