const exec = require('child_process').exec;

// exec('ls', (err, stdout) => {
//   if (err) console.log(err);
//   console.log('Listed all files \n', stdout);
// });
exec('git version', (err, stdout) => {
  if (err) console.log(err);
  console.log('We just checked your software:\n', stdout);
});