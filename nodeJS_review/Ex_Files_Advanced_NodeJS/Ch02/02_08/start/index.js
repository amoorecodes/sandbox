const { Transform } = require('stream');

class ReplaceText extends Transform {

  constructor(input) {
    super();
    this.replaceText = input;
  };

  _transform(data, encoding, cb) {
    const transformText = data.toString().replace(/[[a-z]|[A-Z]|[0-9]]/g, this.replaceText)
    this.push(transformText);
    cb();
  };

  _flush(cb) {
    this.push('more stuff...');
    cb();
  }
}

const madeStream = new ReplaceText('x');

process.stdin
  .pipe(madeStream)
  .pipe(process.stdout);
