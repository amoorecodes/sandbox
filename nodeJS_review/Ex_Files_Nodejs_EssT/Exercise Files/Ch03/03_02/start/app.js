// console.log(process.argv);

const grab = function (flag) {
  const index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index+1];
}

const greeting =  grab('--greeting');
const user = grab('--user');

(!user || !greeting) ? console.log('No Va') : console.log(user, ' , ' , greeting);