const https = require('http');
const fs = require('fs');

const options = {
  hostname: 'macrumors.com',
  port: 80,
  path: '/2018/09/07/what-to-expect-september-2018-event',
  method: 'GET'
};

const req = https.request(options, (res) => {
  let data = ''; 
  console.log('We are connected');
  console.log(`Server status: ${res.statusCode}`);
  console.log('Response Headers: %j', res.headers);
  
  res.setEncoding('UTF-8');

  res.once('data', (chunk) => {
    console.log('started data transfer');
  });

  res.on('data', (chunk) => data += chunk);

  res.on('end', () => {
    // fs.writeFile('MacRumors.html', data, (err) => {

    // });

    const stream = fs.createWriteStream('MacRumors_Page.html');
    stream.write(data, (err) => {
      if (err) console.log('couldn\'t write: ', err);
      console.log('Done writing to a file!');
      // stream.close();
    });  
  });
});

req.on('error', (err) => console.log('There was this: ', err));
req.on('end', () => stream.close());

req.end();
