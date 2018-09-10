const { Readable } = require('stream');
const peaks = [
    "Tallac",
    "Ralston",
    "Rubicon",
    "Twin Peaks",
    "Castle Peak",
    "Rose",
    "Freel Peak"
];

class StreamFromArray extends Readable {
  constructor(array) {
    super({
      // encoding: 'utf-8',
      objectMode: true
    });
    this.array = array;
    this.index = 0;
  }
  
  _read() {
    if ( this.index <= this.array.length) {
      const chunk = {
        data: this.array[this.index],
        index: this.index
      };
      this.push(chunk);
      this.index++;
    } else {
      this.push(null);
    }
  }
}

const stream = new StreamFromArray(peaks); 

stream.on('data', (chunk) => console.log(chunk));

stream.on('end', () => console.log('we\'ve done reading!'));

