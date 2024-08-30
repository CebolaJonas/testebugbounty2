const express = require('express');
const axios = require('axios');
const https = require('https');
const cors = require('cors');
const app = express();

// Configura o agente HTTPS para não rejeitar certificados inválidos
const agent = new https.Agent({
    rejectUnauthorized: false // Desabilita a verificação de certificados
});

app.use(cors({
    origin: '*',
    credentials: true
}));

app.get('/api/protected-data', async (req, res) => {
    try {
        // Captura os cookies fornecidos para a requisição do frontend
        const cookies = req.headers.cookie;

        // Faz a requisição ao servidor de destino com os cookies de autenticação
        const response = await axios.get('https://sales.apple.com/home', {
            headers: {
                'Cookie': cookies // Passa os cookies de autenticação
            },
            httpsAgent: agent // Adiciona o agente HTTPS configurado
        });

        // Envia a resposta para o frontend
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error.message);
        res.status(500).send(`Erro ao buscar dados: ${error.message}`);
    }
});

app.listen(3000, () => console.log('Servidor ouvindo na porta 3000'));
