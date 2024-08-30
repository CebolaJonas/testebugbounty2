const axios = require('axios');

module.exports = async (req, res) => {
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
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error.message); // Adiciona um log do erro
        res.status(500).send(`Erro ao buscar dados: ${error.message}`);
    }
};
