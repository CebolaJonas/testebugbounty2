<?php
// URL do endpoint real no domínio de destino
$url = 'https://sales.apple.com/home';

// Inicializa o cURL
$ch = curl_init($url);

// Configurações do cURL
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  // Recebe a resposta como string
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);  // Segue redirecionamentos, se houver

// Executa a solicitação e captura a resposta
$response = curl_exec($ch);

// Verifica se houve algum erro
if (curl_errno($ch)) {
    echo 'Erro: ' . curl_error($ch);
} else {
    // Retorna a resposta para o cliente
    header("Content-Type: text/javascript");
    echo $response;
}

// Fecha o cURL
curl_close($ch);
?>
