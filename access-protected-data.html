const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

// Permitir CORS para todos os domínios (ou ajuste conforme necessário)
app.use(cors({
    origin: '*',
    credentials: true
}));

// Endpoint que o frontend chama
app.get('/api/protected-data', async (req, res) => {
    try {
        // Captura os cookies enviados pelo navegador
        const cookies = req.headers.cookie;

        // Faz a requisição ao servidor de destino com os cookies de autenticação
        const response = await axios.get('https://sales.apple.com/home', {
            headers: {
                'Cookie': cookies // Passa os cookies de autenticação
            }
        });

        // Envia a resposta para o frontend
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error); // Adiciona um log do erro
        res.status(500).send('Erro ao buscar dados');
    }
});

// Inicia o servidor
app.listen(3000, () => console.log('Servidor ouvindo na porta 3000'));
