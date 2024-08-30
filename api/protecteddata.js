const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

// Permitir CORS para todos os domínios (ou ajuste conforme necessário)
app.use(cors({
    origin: '*',
    credentials: true
}));

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
        res.status(500).send('Erro ao buscar dados');
    }
});

app.listen(3000, () => console.log('Servidor ouvindo na porta 3000'));
