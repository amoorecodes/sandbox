function hideString(str, callback) {
  process.nextTick(() => {
    callback(str.replace(/[a-zA-Z]/g, 'X'));
  });
};

hideString("Hello World", (hidden) => console.log(hidden));


console.log('end');


function delay(seconds,cb) {
  setTimeout(cb , seconds*1000);
};

delay(2, () => {
  console.log('two seconds');
  delay(1, () => {
    console.log('three seconds...');
    delay(1, () => {
      console.log('look at this callback hell! Hail pyramid of doom!');
    });
  });
});