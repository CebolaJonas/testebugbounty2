const https = require('https');

export default function handler(req, res) {
  const url = 'https://sales.apple.com/home';

  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.setHeader('Content-Type', 'text/javascript');
      res.status(200).send(data);
    });

  }).on("error", (err) => {
    res.status(500).send('Error: ' + err.message);
  });
}
