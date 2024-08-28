const https = require('https');

export default function handler(req, res) {
  const url = 'https://sales.apple.com/home';

  // Opções para ignorar verificação SSL
  const options = {
    hostname: 'sales.apple.com',
    path: '/home',
    method: 'GET',
    rejectUnauthorized: false // Ignora verificação SSL
  };

  const request = https.request(options, (resp) => {
    let data = '';

    // Recebe os dados em partes
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // Quando toda a resposta for recebida
    resp.on('end', () => {
      if (resp.statusCode >= 200 && resp.statusCode < 300) {
        res.setHeader('Content-Type', 'text/javascript');
        res.status(200).send(data);
      } else {
        res.status(resp.statusCode).send(`Error: ${resp.statusCode} ${resp.statusMessage}`);
      }
    });
  });

  // Trata erro de requisição
  request.on('error', (err) => {
    console.error('Erro na requisição:', err.message);
    res.status(500).send('Erro na requisição: ' + err.message);
  });

  // Envia a requisição
  request.end();
}
