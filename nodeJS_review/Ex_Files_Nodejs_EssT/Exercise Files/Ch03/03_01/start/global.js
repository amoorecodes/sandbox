const path = require('path');

const hello = 'Hello, this is test.';

const slicedHello = hello.slice(0,5);


console.log(`This is original one: "${hello}" and this is sliced one: "${ slicedHello }".`);
// console.log(__dirname);
// console.log(__filename);
console.log(`Our file name is ${path.basename(__filename)}`);
